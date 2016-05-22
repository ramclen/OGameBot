function View(){
    var self = {},
    buildings = {},
    resources = mapResources();

    (function constructor() {
        mapBuildings();
    })();

    self.getEnergy = function () {
        var energy = $($($("#resources tr")[2]).find("td")[4]).text().split(".").join("").split("/");
        return energy.map(function(element){return parseInt(element)});
    };

    self.addQueue = function(buildingName){
        buildings[buildingName].button.click();
    };

    self.isQueueFull = function () {
        return elementsInQueue() == 4;
    };

    self.elementsInQueue = function () {
        return $(".k a").filter(function (a, element) {
            return $(element).text() === "Cancelar"
        }).length;
    };

    self.changePlanet = function (planetID) {
        var $planetSelector = $("#planet_selector");
        $planetSelector.val($planetSelector.find("option").map(function(e, element){return $(element).val()})[planetID]).change()
    };

    self.getActualPlanet = function () {
        return $("#planet_selector :selected").text().match(/\[([^)]+)\]/)[1];
    };

    function mapResources () {
        var tdResources = $($("#resources tr")[3]).find("td");
        var resources = {titanio: 0, diamante:0, argon:0};
        var i = 0;
        for(var key in resources){
            resources[key] = parseInt($(tdResources[i]).text().split('.').join(""));
            i++;
        }
        return resources;
    }

    function mapBuildings() {
        buildingsButtons().forEach(function (element, index) {
            buildings[nameOfBuilding(index)] = new Building(index, buildingLevel(index), $(element));
        });
    }

    function buildingsButtons() {
        return $(".k a").filter(function (a, element) {
            return $(element).text() != "Cancelar"
        })
    }

    function nameOfBuilding(line) {
        var infoLine = infoText(line).split("\n")[1].trim();
        return infoLine.substring(0, infoLine.indexOf("(") - 1);
    }

    function buildingLevel(position) {
        var levelString = infoText(position).match(/\(([^)]+)\)/)[1];
        levelString = levelString.replace("Nivel ", "");
        return (levelString!=="")? parseInt(levelString) : 0;
    }

    function infoText(line) {
        return $($(".l").filter(function (a, element) {
            return $(element).html().indexOf("(Nivel") != -1;
        })[line]).text();
    }

    return self;
}
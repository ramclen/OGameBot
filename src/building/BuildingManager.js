function BuildingManager(){
    var self = {},
        view = new BuildingManager();
    
    self.start = function(){

    };

    function levelsToTitanio() {
        return view.getBuildingLevel("Mina de titanio") - levelCristal;
    }

    function levelsToCristal() {
        return levelCristal - view.getBuildingLevel("Sintetizador de argón") ;
    }

    function rules() {

        var levelCristal = view.getBuildingLevel("Mina de cristal")
        uploadTitanio = levelsToTitanio(levelCristal);
        umbralLevels.push(levelCristal - view.getBuildingLevel("Mina de titanio"));

        view.getBuildingLevel("Mina de titanio");
        // if()
    }
    
    return self;
}
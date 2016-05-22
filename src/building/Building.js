define([], function () {
    return Building;
});

function Building(id, level, button) {
    var self = {};

    self.ID = id;
    self.level = level;
    self.button = button;

    return self;
}
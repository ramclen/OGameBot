function Resource(name, stock, maxStock){
    var self = {};

    self.name = name;
    self.stock = stock;
    self.maxStock = maxStock;

    return self;
}
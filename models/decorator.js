const Decorator = class {
    constructor(paintStock = []) {
        this.paintStock = paintStock;
    }
}

Decorator.prototype.addPaintCan = function (can) {
    this.paintStock.push(can);
}

Decorator.prototype.litresInStock = function () {
    let total = 0;
    for (const can of this.paintStock) {
        total += can.litres;        
    }
    return total;
}

Decorator.prototype.canPaintRoom = function (roomArea) {
    return this.litresInStock() >= roomArea; // because 1 ltr paints 1 m**2
}

Decorator.prototype.paintRoom = function (room) {
    room.paintRoom();
}

module.exports = Decorator;
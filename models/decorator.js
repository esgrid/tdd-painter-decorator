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

Decorator.prototype.decreasePaintStock = function (room) {
    areaToPaint = room.area;
    for (const can of this.paintStock) {
        if (areaToPaint >= can.litres) {
            areaToPaint -= can.litres;
            can.emptyPaintCan();
        } else {            
            can.litres -= areaToPaint;
            areaToPaint = 0;
        }        
    }
}

Decorator.prototype.removeEmptyStock = function () {
    let total = 0;
    for (const can of this.paintStock) {
        if (can.litres === 0) {
            total++;
        }
    }
    this.paintStock.splice(0, total);
}

module.exports = Decorator;
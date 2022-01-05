const PaintCan = class {
    constructor(litres = 5) {
        this.litres = litres;
    }
}

PaintCan.prototype.emptyCheck = function () {
    return this.litres === 0;
}

PaintCan.prototype.emptyPaintCan = function () {
    this.litres = 0;
}

module.exports = PaintCan;
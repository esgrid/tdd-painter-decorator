const Room = class {
    constructor(area, painted = false){
        this.area = area;
        this.painted = painted;
    }
}

Room.prototype.paintRoom = function() {
    this.painted = true;
}

module.exports = Room;
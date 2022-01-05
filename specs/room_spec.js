const assert = require('assert');
const Room = require('../models/room.js');

describe("Room",
    function () {
        let room;
        beforeEach(
            function(){
                room = new Room(10);
            }
        );
        it('can change painted status',
            function () {
                room.paintRoom();
                const actual = room.painted;
                assert.strictEqual(actual, true);
            }
        );
    }
);
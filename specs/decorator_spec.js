const assert = require('assert');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paint_can.js');
const Room = require('../models/room.js');

describe("Decorator",
    function () {
        let decorator;
        let can1;
        let can2;
        let room;

        beforeEach(
            function () {
                decorator = new Decorator();
                can1 = new PaintCan();
                can2 = new PaintCan(4);
                room = new Room(15);
            }
        );
        it('should start with zero stock', 
            function () {
                const actual = decorator.paintStock.length;
                assert.strictEqual(actual, 0);
            }
        );
        it('should add a paint can',
            function () {
                decorator.addPaintCan(can1);
                decorator.addPaintCan(can2);
                const actual = decorator.paintStock.length;
                assert.strictEqual(actual, 2);
            }
        );
        it('should calculate total litres of paint in stock',
            function () {
                decorator.addPaintCan(can1);
                decorator.addPaintCan(can2);
                const actual = decorator.litresInStock();
                assert.strictEqual(actual, 9);
            }
        );
        describe("room",
            function () {
                it('checks if room can be painted',
                    function () {

                    }
                );
                it('checks if room cannot be painted',
                    function () {

                    }
                );
                it('should paint room',
                    function () {

                    }
                );                
            }
        );
    }
);
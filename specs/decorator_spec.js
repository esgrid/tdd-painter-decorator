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
        let room1;

        beforeEach(
            function () {
                decorator = new Decorator();
                can1 = new PaintCan();
                can2 = new PaintCan(4);
                can3 = new PaintCan(10);
                room = new Room(15);
                room1 = new Room(8);
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
        describe("Room",
            function () {
                it('checks if room can be painted',
                    function () {
                        decorator.addPaintCan(can1);
                        decorator.addPaintCan(can2);
                        const actual = decorator.canPaintRoom(room1.area);
                        assert.strictEqual(actual, true);                        
                    }
                );
                it('checks if room cannot be painted',
                    function () {
                        decorator.addPaintCan(can1);
                        decorator.addPaintCan(can2);
                        const actual = decorator.canPaintRoom(room.area);
                        assert.strictEqual(actual, false);
                    }
                );
                it('should paint room',
                    function () {
                        decorator.paintRoom(room);
                        assert.strictEqual(room.painted, true);
                    }
                );
                it('should decrease paint in stock after painting room',
                    function () {
                        decorator.addPaintCan(can1);
                        decorator.addPaintCan(can2);
                        decorator.addPaintCan(can3);
                        decorator.paintRoom(room);
                        decorator.decreasePaintStock(room);
                        assert.strictEqual(decorator.litresInStock(), 4);
                    }
                );
                it('should remove empty paint cans from stock',
                    function () {
                        decorator.addPaintCan(can1);
                        decorator.addPaintCan(can2);
                        decorator.addPaintCan(can3);
                        decorator.paintRoom(room);
                        decorator.decreasePaintStock(room);
                        decorator.removeEmptyStock();
                        assert.strictEqual(decorator.paintStock.length, 1);
                    }
                );          
            }
        );
    }
);
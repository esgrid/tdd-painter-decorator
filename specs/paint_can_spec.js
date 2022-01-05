const assert = require('assert');
const PaintCan = require('../models/paint_can.js');

describe("PaintCan",
    function () {
        let paintCan;
        beforeEach(
            function () {
                paintCan = new PaintCan(5);
                paintCanEmpty = new PaintCan(0);
            }
        );
        it('should check if can is empty',
            function () {
                const actual = paintCan.emptyCheck();
                assert.strictEqual(actual, false);
            }
        );
        it('should check if can is not empty',
            function () {
                const actual = paintCanEmpty.emptyCheck();
                assert.strictEqual(actual, true);
            }
        );
        it('should empty the can',
            function () {
                paintCan.emptyPaintCan();
                assert.strictEqual(paintCan.emptyCheck(), true);
            }
        );
    }
)
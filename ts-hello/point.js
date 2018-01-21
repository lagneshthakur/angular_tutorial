"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.drawPoint = function () {
        console.log("Coordinates ", this._x, this.y);
    };
    return Point;
}());
exports.Point = Point;

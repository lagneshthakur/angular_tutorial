"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var like_component_1 = require("./like.component");
var p = new point_1.Point(10, 20);
p.drawPoint();
var lc = new like_component_1.LikeComponent(10, false);
lc.onClick();
console.log("likesCount: " + lc.likesCount + ", isSelected: " + lc.isSelected);

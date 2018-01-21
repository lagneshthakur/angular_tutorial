import { Point } from './point' ;
import { LikeComponent } from './like.component' ;

let p = new Point(10,20);
p.drawPoint();

let lc = new LikeComponent(10,false);

lc.onClick();

console.log(`likesCount: ${lc.likesCount}, isSelected: ${lc.isSelected}`);
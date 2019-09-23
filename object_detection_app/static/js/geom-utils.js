"use strict";

function get_polygon_centroid(pts) {
    var first = pts[0], last = pts[pts.length - 1];
    if (first.x != last.x || first.y != last.y) pts.push(first);
    var twicearea = 0,
        x = 0, y = 0,
        nPts = pts.length,
        p1, p2, f;
    for (var i = 0, j = nPts - 1; i < nPts; j = i++) {
        p1 = pts[i]; p2 = pts[j];
        f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x);
        twicearea += f;
        x += (p1.x + p2.x - 2 * first.x) * f;
        y += (p1.y + p2.y - 2 * first.y) * f;
    }
    f = twicearea * 3;
    return { x: x / f + first.x, y: y / f + first.y };
}

function histogram(data, size) {
    var length = data.length;

    var min = data[0];
    var max = data[1];

    for (var i = 0; i < length; i++) {
        var item = data[i];
        if (item < min) min = item;
        else if (item > max) max = item;
    }

    var bins = Math.ceil((max - min + 1) / size);

    var histogram = new Array(bins);

    for (var i = 0; i < bins; i++) histogram[i] = 0;

    for (var i = 0; i < length; i++)
        histogram[Math.floor((data[i] - min) / size)]++;

    return histogram;
}

function midpoint(ptA, ptB) {
    //return {x:(ptA[0] + ptB[0]) * 0.5, y:(ptA[1] + ptB[1]) * 0.5};
    return [(ptA.x + ptB.x) * 0.5, (ptA.y + ptB.y) * 0.5];
}

function diff(v1, v2) {
    if (v1.x !== undefined) return { x: v1.x - v2.x, y: v1.y - v2.y };
    return v1.map((value, index) => value - v2[index]);
}

function norm(vector) {
    if (vector.x !== undefined) return norm([vector.x, vector.y]);
    return Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
}

//canvas zoom pan 
/*   
function redraw(canvas,ctx) {

    // Clear the entire canvas
    var p1 = ctx.transformedPoint(0, 0);
    var p2 = ctx.transformedPoint(canvas.width, canvas.height);
    ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    //ctx.drawImage(gkhead, 0, 0);

}

var zoom = function (ctx,clicks,lastX,lastY) {
    var scaleFactor = 1.1;
    var pt = ctx.transformedPoint(lastX, lastY);
    ctx.translate(pt.x, pt.y);
    var factor = Math.pow(scaleFactor, clicks);
    ctx.scale(factor, factor);
    ctx.translate(-pt.x, -pt.y);
    redraw(ctx);
}

var handleScroll = function (evt) {
    var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
    if (delta) zoom(delta);
    return evt.preventDefault() && false;
};
*/
// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
function trackTransforms(ctx){
    var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function(){ return xform; };

    var savedTransforms = [];
    var save = ctx.save;
    ctx.save = function(){
        savedTransforms.push(xform.translate(0,0));
        return save.call(ctx);
    };
    
    var restore = ctx.restore;
    ctx.restore = function(){
        xform = savedTransforms.pop();
        return restore.call(ctx);
            };

    var scale = ctx.scale;
    ctx.scale = function(sx,sy){
        xform = xform.scaleNonUniform(sx,sy);
        return scale.call(ctx,sx,sy);
            };
    
    var rotate = ctx.rotate;
    ctx.rotate = function(radians){
        xform = xform.rotate(radians*180/Math.PI);
        return rotate.call(ctx,radians);
    };
    
    var translate = ctx.translate;
    ctx.translate = function(dx,dy){
        xform = xform.translate(dx,dy);
        return translate.call(ctx,dx,dy);
    };
    
    var transform = ctx.transform;
    ctx.transform = function(a,b,c,d,e,f){
        var m2 = svg.createSVGMatrix();
        m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
        xform = xform.multiply(m2);
        return transform.call(ctx,a,b,c,d,e,f);
    };
    
    var setTransform = ctx.setTransform;
    ctx.setTransform = function(a,b,c,d,e,f){
        xform.a = a;
        xform.b = b;
        xform.c = c;
        xform.d = d;
        xform.e = e;
        xform.f = f;
        return setTransform.call(ctx,a,b,c,d,e,f);
    };
    
    var pt  = svg.createSVGPoint();
    ctx.transformedPoint = function(x,y){
        pt.x=x; pt.y=y;
        return pt.matrixTransform(xform.inverse());
    }
}


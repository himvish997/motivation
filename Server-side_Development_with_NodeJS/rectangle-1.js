/*
 * We are exporting the module of rectangle and we use it in other file. 
 */

exports.perimeter = function (x, y) {
        return (2*(x+y));
}

exports.area = function (x, y) {
        return (x*y);
}
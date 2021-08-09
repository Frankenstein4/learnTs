//函数声明写法
function add(x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
}
var result = add(3, 4, 0);
console.log(result);


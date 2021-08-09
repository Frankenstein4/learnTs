//函数声明写法
function add(x:number,y:number,z?:number):number {
    if(typeof z === 'number'){
        return x+y+z
    }
    return x+y
}

var result = add(3,4,0);
console.log(result);

//函数表达式写法 
var addTwo = function (x:number,y:number,z?:number):number {
    if(typeof z === 'number'){
        return x+y+z
    }
    return x+y
}

//add2 和 addTwo 完全相同了  =>不是es6中箭头函数  而是ts中声明函数类型返回值的方法
var add2:(x:number,y:number,z?:number)=>number = addTwo;
let isDone : boolean = false

let age : number = 11

let isBinaryNumber:number = 0b1111

let firstName : string = 'archimboldi'

let msg : string = `hello ${firstName} age is ${age}`

let u :undefined = null
let u1 : undefined = undefined

let n :null = undefined

/* 
undefined  和 null  是所有类型的子类型

 */

let num:number = undefined 




/* 
任意类型  不要使用
*/
let anyThing : any = 4
anyThing = 'ss'
anyThing = true
anyThing.getName()


/* 
联合类型
*/
let numberOrString : number | string = 234


/* 
定义数组
*/
let arrOfNumber : number[] = [1,2,4]
arrOfNumber.push(2)
//arrOfNumber.push('2') 报错

/* 
类数组
*/

function tset () {
    console.log(arguments);
    for (let i of arguments){

    }
    //let arr : HTMLCollection = arguments
    //arguments.forEach
}

/* 
定义自定义数组  元祖 必须与个数相对应
*/
let user : [number,string,object] = [1,'22',[1]]

/* 
interface 接口  
对对象的形状（shape）进行描述，
对类（class）进行抽象
Duck Typing 鸭子类型  动态编程语言中的一种推断策略 
*/


/* 
function
输入
输出

*/



/* 
类 class 定义了一切事物的抽象特点
对象 object 类的实例
面向对象 oop 三大特性：封装 继承 多态
*/

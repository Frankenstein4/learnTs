interface Person {
    readonly id :number;//只允许第一次声明 后面不可在赋值了
    name:string;
    age?:number;//?代表可选择属性
}
let Viking : Person = {
    id:3,
    name:'111',
    age:1
}
Viking.name = 'ss';
/* 
此上 展示了 interface 对 object 的 形状的 约束 
*/
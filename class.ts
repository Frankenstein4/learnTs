class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run(){
        return `${this.name} is running`
    }
}

const snake = new Animal('loli');
console.log(snake.run())

/* 
npm install -g ts-node 
然后运行 ts-node xx.ts  会报错 
在文件夹下面 运行下面的命令 装包 就OK
npm install -D tslib @types/node

*/

class Dog extends Animal {
    bark(){
        return `${this.name} is barking`
    }
}

const lili = new Dog('salue');
console.log(lili.bark())


class Cat extends  Animal {
    constructor(name:string){
        super(name);
        console.log(this.name)
    }
    run(){
        return 'hello' + super.run()
    }
}
const maomao = new Cat('maomao');
console.log(maomao.run())
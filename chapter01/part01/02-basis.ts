let a:number;
//a 的类型设置为number，在以后的使用过程中a的值只能是数字

a = 10;
// a = 'hello';//此行代码会报错，因为变量a的类型时number，不是赋值字符串
a = 'hello';
//null和undefined都不会报错
a = null;
a = undefined;

let b: string;
b = 'hello';
//b = 123;

//声明完变量直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值时同时进行的，TS可以自动对变量进行类型检测
let c = false;

c = true;

//赋值为number会报错，因为ts会隐性进行数值类型赋值
c = 123;

//这个特性主要用到函数中
function sum(a,b){
    return a+b;
}

console.log(sum(123,456));//579

console.log(sum(123, "456"));//123456

function sum1(a: number, b: number){
    return a+b;
}

// sum1(133, "456")//类型
// sum(1233,1525,166)//数量


//函数后面加上数值类型的限制，是针对return返回值的数据类型限制
function sum(a: number, b:number): number{
    return a + 'hello';
}

let result = sum(123, 456);
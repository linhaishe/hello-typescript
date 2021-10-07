//object 表示一个js对象
//但是很少直接使用object，因为所有一切皆是对象，一般用于规范对象中的属性名和属性值

let z:object;
z = {};
z = function(){};

//{ } 用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上？，表示属性是可选的
let u: {name: string, age?:number};

//没有得话就会报错
u = {};

u = {name: "孙悟空", age: 18};


// let c3: {name: string, a?:number, b?:number};
// c = {name:"猪八戒", a:1, b:2,c:3}

//[propName: string]:any 表示任意类型的属性
let v: {name: string, [propName: string]:any}

v = {name:"猪八戒", age: 18, gender: '男'}




/* 
    多行注释（块注释）：' Alt+Shift+A ’
    设置函数结构的类型声明：
        语法: (形参：类型，形参：类型...)=> 返回值
*/

//这样限制基本没有什么意义，我们需要的是限制函数的结构，它有几个参数和返回值的类型。

//let d1 :Function;
//用类似于箭头函数的方式处理，设置函数的类型声明
let d1: (a:number ,b: number)=>number;

d1 = function (n1: number, n2: number): number {
    return n1 + n2
}

d1=function(a,b){
    return a+b
}
/* 
    数组的类型声明：
        类型[]
        Array<类型>
*/

//string[] 表示字符串数组
let e1:string[];
e1 = ['a','b','c'];

//number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/* 新增
    tuple(元组)：就是固定长度的数组
        语法：[类型， 类型， 类型]
*/

let h: [string, number];
h = ['hello', 123];
h = ['hello', 123,244];

/* 新增
    enum 枚举

*/
/*定义一个枚举类，为gender*/
enum Gender{
    Male = 0,
    Female = 1,
}
let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male//'male'
}

console.log(i.gender === Gender.Male)

//&表示同时

let j: {name: string} & {age: number};
j = {name: '孙悟空', age:18}
j = {name: '孙悟空'}


// 类型的别名,type,用于简化类型的使用
type myType = 1 | 2 | 3 | 4 | 5;

let k: myType;
let l: myType;

let m: myType;

k = 2;
k=6;
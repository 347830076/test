/*字符串新特性*/
//多行字符串
var content = `dsdf
sdfsdf
sdfsd
fdsf
sdf
`;

//字符串模板
var myname = 'guo yu';
var getName = function(){
    return 'chenguoyu';
}

console.log(`hello${myname}`);
console.log(`hello${getName()}
<span>${myname}</span>
`);

//自动拆分字符串
function test(template,name,age){
    console.log(template);
    console.log(name);
    console.log(age);
}
var getAge = function(){
    return 18;
}

test`hello my name is ${myname},i'm ${getAge()}`;

//参数类型
var stringtest: string = '陈国宇';
var alias: any = "12";
var age: number = 2313;
var man: boolean = true;
function funtest(name): void{

}
function funtest1():string{
    return "dsd";
}
class Person {
    name:string;
    age :number;
}
var chen = new Person();
chen.age = 15;
chen.name = "yu"

function add (name:string,age?:string,sex:string ='男'){
    console.log(name)
}

add('name','sex','sdf');

/*
* 参数类型
*    在参数名称后面使用冒号来指定参数的类型
* 默认参数
*    在参数声明后面用等号来指定参数的默认值
* 可选参数
*    在方法的参数声明后面用问号来标明此参数为可选参数
* */

// func1(1,1,1,1,"ds");

// function func1(...args){
//     args.forEach(function(args)){
//         console.log(args)
//     }
// }
var args2 = [1,1,1,1,1]
// func2(...args2);
function func2(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(() => {
    var a = 1;
    return a;
});
var arr2 = [1,2,3,4];
// arr2.desc = 'sfd';
for(var i of arr2){

}
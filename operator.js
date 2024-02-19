// (1)arithmatic operators
// let a = 5;
// let b= 2;

// console.log("a =",a,"&b =",b);
// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b);

// (2) Unary operator
// a = a-1;
// console.log("a =",a);
// a1= a--;
// console.log("a1 =",a1);
// console.log("++b =",++b);
// console.log("a++ =",a++);
// console.log("a =",a);

// (3) Assignment operator
/*a+= 4; //a = a+4;
console.log("a =",a);
a-= 4; //a = a-4;
console.log("a =",a);
a*= 4; //a = a*4;
console.log("a =",a);
a/= 4; //a = a/4;
console.log("a =",a);
a%= 4; //a = a%4;
console.log("a =",a);*/

// (4) comparison operator
// console.log("5==5",a==b);
// console.log("5!=2",a!=b);
// let a=5;
// let b ="5";
// console.log("a == b",a==b);
// console.log("a === b",a===b);
// console.log("a !== b",a!==b);

// (5)Logical operator
// And/or/not

// (6)conditional statements [if,else,else if]
// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color ="white";
// }
// console.log(color);
/* method-1
let age=25;
let result=age>=18? "adult" : "not adult";
console.log(result);*/

/*method-2
let age=25;
age>=18 ? console.log("adult"):console.log("not adult");*/

/*practice problem-1
que:- get user to input a number using prompt("Enter a number:"). checl if the number is a multiple of 5 or not.*/

// let num = prompt("Enter a number");

// if(num%5 ===0)
// {
//     console.log(num,"is a multiple of 5.");
// }
// else
// {
//     console.log(num,"is not a multiple of 5.");
// }

/* practice problem-2
que:- write a code which can give grades to students according to their scores.*/
let result=67;
if(result>80 && result<100){
    console.log("grade  = A");
}
else if(result>70 && result<79){
    console.log("grade  = B");
}
else if(result>60 && result<69){
    console.log("grade  = C");
}
else if(result>50 && result<59){
    console.log("grade  = D");
}
else if(result>0 && result<49){
    console.log("grade  = F");
}
else{
    console.log("result is not found");
}
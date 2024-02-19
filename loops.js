// loops in js 
// for,while,do while

// ***for loop***
// for(let i=1;i<6;i++){
//     console.log("I am Nishi.");
// }
// for(let i=1;i<6;i++){
//     console.log("i=",i);
// }

// exa:- calculate sum of first n numbers
// let sum=0;
// let n=10;
// for(let i=1;i<=n;i++){
//     sum = sum+i;
// }
// console.log("sum = ",sum);
// console.log("loop has ended")

// ***while loop***
// let i=0;
// while(i<=10){
//     console.log("Nishi Patel")
//     i++;
// }

// ***do..while loop***
// let i=1;
// do{
//     console.log("Nishi");
//     i++;
// }while(i<=10);

// let i=1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i<=10);

// ***for-of loop***
// let str="Nishipatel";

// let size=0;
// for(let i of str)
// {
//     console.log("i =" ,i);
//     size++;
// }
// console.log("string size =",size);

// ***for-in loop***
// let student = {
//     name:"nishi",
//     age:21,
//     cgpa:8.6,
//     isPass:true
// };
// for(let key in student){
//     console.log("key =",key," value =",student[key]);
// }

// practice problems
// que-1- print all even number from 0 to 100.
// for(let num=0;num<=100;num++){
//     if(num%2===0){
//         console.log(num);
//     }
// }

// que-2 create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;
let userNum = prompt("Guess the game number : ");
// console.log(userNum);

while(userNum != gameNum){
    userNum = prompt("you entered wrong number. Guess again : ");  
}
console.log("congratulations, you entered the right number");

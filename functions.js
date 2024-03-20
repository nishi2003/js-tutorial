// function :- block of code that performs a specific task,

// function myFunction(msg,n){
//     console.log(msg*n);    //parameter ->> input
// }

// myFunction("I love js, 1000"); //argument

// function to sum 2 numbers.
// function sum(a,b){
//     console.log(a+b);
// }

// sum function using arrow function
// function sum(a,b){
//     // s=a+b;
//     return a+b;
// }
// const arrowSum= (a,b) =>{
//     console.log(a+b);
// };


// que-1 create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.
// function countvowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     } 
//     // console.log(count);
//     return count;
// }
// const countvow = (str) =>{
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     } 
//     // console.log(count);
//     return count;
// }

// for each loop
// let arr = [1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// });

// let arr = ["pune","delhi","mumbai"];
// arr.forEach((val) =>{
//     console.log(val.toUpperCase());
// });

// practice problem
// que-1 for a given of numbers print the square of each value using the foreach loop.
/*let nums = [2,3,4,5,6];

nums.forEach((num) =>{
    console.log(num*num);
});
nums.map((val) =>{
    console.log(val);
});
let newArr = nums.map((val) =>{
    return val*2;
});
console.log(newArr);

let newArr= nums.filter((num)=>{
    return num%2===0;
});
console.log(newArr);

const output = nums.reduce((res,curr)=>{
    // return res+curr;
    return res>curr ? res:curr;
});
console.log(output);*/

// practice problem
// que-1 we are given array of marks of students. filter out of the marks of students that scored 90+.
let marks = [97,64,32,49,99,96,86];
let toppers = marks.filter((val)=>{
    return val>90;
});
console.log(toppers);

let n = prompt("enter a number:");
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]= i;
// }
// console.log(arr);
// let sum = arr.reduce((res,curr) =>{
//     return res+curr;
// });
// console.log(sum);
// factorial
let sum = arr.reduce((res,curr) =>{
    return res*curr;
});
console.log(sum);
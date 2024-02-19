//----- strings----- is immutable
// let str="nishi patel";
// console.log(str);
// console.log(typeof str);

// let obj = {
//     item: "pen",
//     price:10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price,"rupees.");

//------ Template literals-----
// console.log("Nishi\nPatel");
// console.log("Nishi\tPatel");

// let str="nishi\tPatel";
// console.log(str.length);

// -----string methods-----
// let str = "nishi";
// str= str.toUpperCase();
// str.toLowerCase();
// let str = "    nishi patel"
// console.log(str.trim());

// slice:- returns part of string
// let str = "abcdefgh"
// console.log(str.slice(2,5));
// console.log(str.slice(5));

// concat:- joins str2 with str1
// let str1="nishi";
// let str2 = " patel";
// let str= str1.concat( str2);
// console.log(str);

// let str="hello";
// console.log(str.replace("lo","p"));
// console.log(str.replace("h","p"));

// practice problems
// ----que:1----
// prompt the user to enter their full name.Generate a username for them based on the input start username with @ followed by their full name and ending with the fullname length.

let fullname = prompt("enter your fullname without spaces");
let username = "@" + fullname + fullname.length;
console.log(username);
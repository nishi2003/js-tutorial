// array is *mutable*

// let marks= [97,82,75];
// console.log(marks);

// looping over an array
// let marks= [97,82,75];

// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }

// let cities= ["delhi","mumbai","ahmedabad","mahesana"];
// for(let city of cities){
//     console.log(city);
// }

// practice problem
// que-1 for a given array with marks of students. find the average marks of the entire class. 
// let marks = [85,97,44,37,76,60];
// let sum =0;

// for(let val of marks){
//     sum = sum+val;   
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// que-2 for a given array with prices of 5 items . All items have an offer of 10% off on them. change the array to store final price after applying offer.
// let items = [250,645,300,900,50];

// let i=0;
// for(let val of items){
//     console.log(`value at i ${i} = ${val}`);
//     let offer =val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] -=offer;
// }
// console.log(items);

// -----Array methods ----- push/pop/tostring
// let foodItems = ["pizza",
// "burger","puff","dabeli"];
// foodItems.push("chips","sandwitch");
// console.log(foodItems);

// let foodItems = ["pizza",
// "burger","puff","dabeli"];
// // foodItems.pop();
// console.log(foodItems.toString())
// console.log(foodItems);

// concat
// let marvelheroes = ["thor","spiderman","ironman"];
// let dcheros = ["superman","batman"];
// let heroes = marvelheroes.concat(dcheros);
// console.log(heroes);
// marvelheroes.unshift("antman");
// console.log(marvelheroes);
// let val=marvelheroes.shift();
// console.log("deleted:",val);

// splice(add,remove,replace) method
// let arr = [1,2,3,4,5,6,7,8];
// arr.splice(3,2,101,100);
// arr.splice(0,2);

// -----practice problem-----
// que-1 create an array to store cmpanies. (a)remove the first company from the array
// (b)remove uber & add ola in its place (c)add amazon at the end

let companies = ["bloomberg","microsoft","uber","google","IBM","netflix"];
// companies.shift();
// companies.splice(2,1,"ola");
companies.push("amazon");
// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout (()=>{
//     console.log("hello");
// },
// 4000);

// console.log("three");
// console.log("four");


// *****callbacks*****

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);

// let age = 19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }
//     else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }

// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;j<5;j++){
//         str = str + j;
//         // console.log(j);
//     }
//     console.log(str);
// }

// function getData(dataId,getNextData){
//     // console.log("data",dataId);
//     setTimeout(() =>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1);
// getData(2);
// getData(3);

// *** callback hell problems
// getData(1,() =>{
//     console.log("getting data2 .....");
//     getData(2,()=>{
//         console.log("getting data3 .....");
//         getData(3,() =>{
//             console.log("getting data4 .....");
//             getData(4);
//         });
//     });
// });

// *****promises*****

// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     // resolve(123);
//     reject("some error");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("Success");
//             // reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }


// ***promice then and catch function ***


// const getPromise = () =>{
//     return new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     // reject("some error");
//     resolve("success");
// });
// };

// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) =>{
//     console.log("rejected",err);
// });


// function asyncFunc1() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },3000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success");
//         },5000);
//     });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log(res);
// });

// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) =>{
//     console.log(res);
// });

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) =>{});
// });

// ***promise chaining***
// console.log("fetching data1...");
// asyncFunc1().then((res) =>{
//     console.log("fetching data2...");
//     asyncFunc2().then((res) =>{});   
// });

// function getData(dataId){
//     return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         console.log("data",dataId);
//         resolve("success");
//     },2000);
// });
// }

// ***promise chaining methods***
// method-1
// let p1= getData(1);
// p1.then((res) =>{
//     console.log(res);
// });

// method-2
// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res)=>{
//     console.log(res);
//     });
// });

// method-3
// getData(1)
// .then((res) =>{
//     return getData(2);
// })
// .then((res) =>{
//     console.log(res);
// });

// ***** async-await()*****

// async function hello(){
//     console.log("hello");
// }

// function api() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//         console.log("weather data");
//         resolve(200);
//     },2000);
//     });
// }

// async function getWeatherData(){
//     await api();//1st call
//     await api();//2nd call
// }

// function getData(dataId){
//     return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         console.log("data",dataId);
//         resolve("success");
//     },2000);
// });
// }

function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
// }

// IIFE function
(async function () {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
})();
// let btn1 = document.querySelector("#btn1");

// btn1.onclick= (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log("Handler 1");
//     let a=25;
//     a++;
//     console.log(a);
// };

// btn1.onclick= () =>{
//     console.log("Handler 2");
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

// btn1.addEventListener("click",() =>{
//     console.log("button1 was clicked  - handler1");
// });
// btn1.addEventListener("click",() =>{
//     console.log("button1 was clicked - handler2");
// });
// // btn1.addEventListener("click",() =>{
// //     console.log("button1 was clicked  - handler3");
// // });
// btn1.addEventListener("click",() =>{
//     console.log("button1 was clicked  - handler4");
// });

// const handler3 = () =>{
//     console.log("button1 was clicked-handler3");
// };
// btn1.removeEventListener("click",handler3)

// ans of qs-1
let modeBtn= document.querySelector("#mode");
let body = document.querySelector("body");
let currMode= "light";

modeBtn.addEventListener("click",() =>{
    // console.log("you are trying to change mode");
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
    }else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
    }
    console.log(currMode);
});
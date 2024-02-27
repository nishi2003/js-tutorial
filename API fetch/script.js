// const URL = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);
// async await method
// const getFacts = async () =>{
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     // console.log(response.status);
//     console.log(response);
//     let data = await response.json();
//     // console.log(data);
//     // console.log(data[0].text);
//     factpara.innerText = data[2].text;
// };


// promise chaining
// function getFacts(){
//     fetch(URL)
//     .then((response) =>{
//      return response.json();
//     })
//     .then((data) =>{
//       console.log(data);
//       factpara.innerText = data[2].text;
//     });
// }
// btn.addEventListener("click",getFacts);

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"
// usd/inr.json (link unnecessary part)

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// document.addEventListener("load",() =>{
//   updateExchangeRate();
// });

for (let select of dropdowns) {
  for (currCode in countryList) {
    // console.log(code,countryList[code]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change" ,(evt) =>{
    updateFlag(evt.target);
  });
}

const updateFlag = (element) =>{
  // console.log(element);
  let currCode = element.value;
  // console.log(currCode);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src= newSrc;
};

// btn.addEventListener("click",async (evt) =>{
//   evt.preventDefault();
//   updateExchangeRate();
// });

const updateExchangeRate = async () =>{
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = "1";
  }
  // console.log(amtVal);
  // console.log(fromCurr.value,toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  console.log(data);

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal}  ${fromCurr.value} = ${finalAmount}  ${toCurr.value}` 
};

document.addEventListener("load",() =>{
  updateExchangeRate();
});

window.addEventListener("click",async (evt) =>{
  evt.preventDefault();
  updateExchangeRate();
});
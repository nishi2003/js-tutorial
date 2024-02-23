// const student = {
//     fullName : "nishi patel",
//     marks:95,
//     printMarks: function(){
//         console.log("marks = ",this.marks);
//     },
// };


// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// };

// const  karan = {
//     salary:50000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     },
// };
// karan.__proto__ = employee;

// class Toyotacar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
// }

// let fortuner = new Toyotacar("fortuner",10);
// fortuner.setBrand("fortuner");
// let lexus = new Toyotacar();

// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
    // sleep(){
    //     console.log("sleep");
    // }
    // work(){
    //     console.log("Do nothing");
    // }
// }
// class Engineer extends person{
//     constructor(name) {
        // console.log("enter child constructor");
        // super(name);// to invoke parent class constructor
        // this.branch = branch;
        // console.log("exit child constructor");
//     }
//     work(){
//         super.eat();    
//         console.log("solve problems,build something");
//     }
// }

// class Doctor extends person{
//     work(){
//         console.log("Treat patients");
//     }
// }
// let engObj = new Engineer("Nishi");

// ***Ans of practice problem -1***
// let DATA = "secret information";
// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data = ",DATA);
//     }
// }
// let student1 = new User("nishi","abc@email.com");
// let student2 = new User("vishva","def@email.com");
// let teacher1 = new User("Dean","dean@clg.com");

// ***Ans of practice problem-2***
// let DATA = "secret information";
// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data = ",DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }
// let student1 = new User("nishi","abc@email.com");
// let student2 = new User("vishva","def@email.com");
// let teacher1 = new User("Dean","dean@clg.com");

// let admin1 = new Admin("admin","admin@clg.com");


// error handling
let a =5;
let b = 10;
console.log("a=" ,a);
console.log("b=" ,b);
console.log("a+b=" ,a+b);
try{
    console.log("a+b=",a+c);
}
catch(err){
    console.log(err);
}
console.log("a+b=" ,a+b);
console.log("a+b=" ,a+b);
console.log("a+b=" ,a+b);
console.log("a+b=" ,a+b);
console.log("a+b=" ,a+b);
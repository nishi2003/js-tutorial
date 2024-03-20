// * * * * *
//  * * * *
//   * * *
//    * *
//     *
// let n = 5;
// for (let i = n; i>=1; i--) {
//     let str = " ";
//     for (let j = i; j <=n; j++) {
//         str += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         str += " *";
//     }
//     console.log(str);
// }

let n = 5;
for (let i = n; i>=1; i--) {
    let str = " ";
    for (let j = i; j <=n; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += " *";
    }
    // console.log(str);
    // document.write("<br>");
    document.write(str);
}
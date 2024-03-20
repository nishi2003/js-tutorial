//        *
//       * *
//      * * *
//     * * * *
//    * * * * *

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let j = n; j >=i; j--) {
        str += " ";
    }
    document.write("<br>");
    for (let k = 1; k <= i; k++) {
        str += " *";     
    }
    
    // console.log(str);
    document.write(str);
}

// let line='';
// for(let i=1; i<=5;i++){
//   line += ' '.repeat(5-i)
//   line += '*'.repeat(i+i-1)+'\n'
// //   document.write("<br>");
// }
// document.write("<br>");

// // console.log(line);
// document.write(line);




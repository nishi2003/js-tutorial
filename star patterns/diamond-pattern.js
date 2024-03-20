let n = 5;
for (let i = 0; i <= n; i++) {
    let str = " ";
    for (let j = i; j <=n; j++) {
        str += " ";
    }
    for (let k = 0; k<2*i-1; k++) {
        str += `${i - 1}`;
        
    }
    console.log(str);
}
for (let i = n-1; i>=1; i--) {
    let str = " ";
    for (let j = i; j <=n; j++) {
        str += " ";
    }
    for (let k = 1; k <= 2*i-1; k++) {
        str += `${i-1}`;
    }
    console.log(str);
}


//optimise code

// let n = 5;
// for (let i = 0; i <= n; i++) {
//     let str = " ";
//     str = spacing(str,i,n);
//     str = ptr(str,i);
//     console.log(str);
// }
// for (let i = n-1; i>=1; i--) {
//     let str = " ";
//     str = spacing(str,i,n)
//     str = ptr(str,i);
//     console.log(str);
// }
// function spacing(str,i,n){
//     for (let j = i; j <=n; j++) {
//         str += " ";
//     }
//     return str;
// }

// function ptr(str,i){
//     for (let k = 1; k <= 2*i-1; k++) {
//         str += `${i-1}`;
//     }
//     return str;
// }


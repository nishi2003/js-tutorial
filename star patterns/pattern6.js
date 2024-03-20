// * * * * *  * * * * *  * * * * *  * * * * *  * * * * * 
// * * * *    * * * *    * * * *    * * * *    * * * *
//  * * *      * * *      * * *      * * *      * * *
//   * *        * *        * *        * *        * *
//    *          *          *          *          *


// let n = 4;
// for (let i = n; i >= 1; i--) {
//     let str = " ";
//     for (let y = 0; y < 20; y++) {  /*y<n*/
        
//         for (let j =i; j <= n; j++) {
//             str += " ";
//         }
//         for (let k = 1; k <= i; k++) {
//             str += "* ";
//         }
//         for(let x=1;x<=n-i;x++){
//             str += " ";
//         }
//     }
//     console.log(str);
// }

let n = 5;
for (let i = n; i >= 1; i--) {
    let str = " ";
    for (let y = 0; y < 10; y++) {  /*y<n*/
        
        for (let j =i; j <= n; j++) {
            str += " ";
        }
        for (let k = 0; k < i; k++) {
            str += " ";
            if(i==1){
                str += "5";
            }
            else if(y%2==0){
                str += "*";
            }
            else{
                str+="-";
            }
            
        }   
        for(let x=1;x<=n-i;x++){
            str += " ";
        }
       
    }
    console.log(str);
}

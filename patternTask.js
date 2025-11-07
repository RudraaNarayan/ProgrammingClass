//! 1. 
//? 1 0 1 0 1
//? 1 0 1 0 1
//? 1 0 1 0 1
//? 1 0 1 0 1
//? 1 0 1 0 1
/*
for (let i= 1; i<=5; i++) {
    let res="";
    for (let j=1; j<=5; j++) {
        if(j%2===0){
            res +="0 "
        }
        else{
            res +="1 "
        }      
    }   
        console.log(res);  
}
*/

//! 2.
//? 1 0 0 0 0
//? 0 1 0 0 0
//?? 0 0 1 0 0
//? 0 0 0 1 0
//? 0 0 0 0 1
/*
for (let i=1; i<=5; i++) {
    let pattern="";
    for (let j=1; j<=5; j++) {
        if (i === j) {
            pattern +="1"
        }
        else{
            pattern +="0"
        }        
    }  
    console.log(pattern);  
}
*/


//! 3.
//? 1 1 1 1 0
//? 1 1 1 0 1
//? 1 1 0 1 1
//? 1 0 1 1 1
//? 0 1 1 1 1
// for (let i=1; i<=5; i++){
//   let pattern="";
//   for (let j=1; j<=5; j++){
//         if (i+j === 6) {
//             pattern +="0"
//         }
//         else{
//             pattern +="1"
//         }
//   }
//   console.log(pattern);
// }  


//! 4.
//? 1 1 0 1 1
//? 1 1 0 1 1
//? 1 1 0 1 1
//? 0 0 1 0 0
//? 0 0 1 0 0
/*
const n=5;
for (let i=1; i<=n; i++){
    let row=""
    if(i<=Math.round(n/2)){
        for (let j=1; j<=n; j++){
            if(j===Math.round(n/2)){
                row+="0 "
            }
            else{
                row+="1 "
            }
        }
    }
    else{
        for(let j=1; j<=n; j++){
            if(j===Math.round(n/2)){
                row+="1 "
            }
            else{
                row+="0 "
            }
        }
    }
    console.log(row);
}
*/
/*
let n=5;
for (let i=1; i<=n; i++){
    let row=""
    for(let j=1; j<=n; j++){
        if((i<=Math.round(n/2) && j!==Math.round(n/2)) || (i>Math.round(n/2) && j===Math.round(n/2))){
            row+="1 "
        }
        else{
            row+="0 "
        }
    }
    console.log(row);
}
*/

//! 5.
//? 0 0 0 1 1
//? 0 0 0 1 1
//? 0 0 0 1 1
//? 1 1 1 0 0
//? 1 1 1 0 0
// const n=5;
// for (let i=1; i<=n; i++){
//     let row=""
//     for(let j=1; j<=n; j++){
//         if((i<=Math.round(n/2) && j<=Math.round(n/2)) || (i>Math.round(n/2) && j>Math.round(n/2)) ){
//             row+="0 "
//         }
//         else{
//             row+="1 "
//         }
//     }
//     console.log(row);
// }


//! 6.
//? 1  2  3  4  5
//? 6  7  8  9  10
//? 11 12 13 14 15
//? 16 17 18 19 20
//? 21 22 23 24 25
/*
const n =5;
let x=1
for (let i=1; i<=n; i++){
    let row=""
    for( let j=1; j<=n; j++){
        if(x<=10){
            row+=x+"  "
        }
        else{
            row+=x+" "
        }
        x++
    }
    console.log(row);
}
*/

//! 7.
//? 0 1  0 1   0
//? 0 4  0 16  0
//? 0 9  0 81  0  
//? 0 16 0 256 0
//? 0 25 0 625 0 
/*
const n=5;
for(let i=1; i<=n; i++){
    let row=""
    for(let j=1; j<=n; j++){
        if(j % 2 == 0){
            row+=i**j + "  "
        }
        else{
            row+="0  "
        }
    }
    console.log(row);
}
*/


//! 8.
//? 1 1 1 1 1
//? 1 0 0 0 1
//? 1 0 0 0 1
//? 1 0 0 0 1
//? 1 1 1 1 1
/*
const n=5;
for(let i=1; i<=5; i++){
    let row=""
    for(let j=1; j<=5; j++){
        if(i===1 || j===1 || (i==n) || (j==n)){
            row+="1 "
        }
        else{
            row+="0 "
        }
    }
    console.log(row);
}
*/


//! 9.
//? 1 0 0 0 1
//? 1 1 0 1 1
//? 1 0 1 0 1
//? 1 1 0 1 1
//? 1 0 0 0 1
/*
let n=5;
for(let i=1; i<=n; i++){
    let row=""
    for(let j=1; j<=n; j++){
        if((j===1) || (j===n) || (i===j) || (i+j==n+1) ){
            row+="1 "
        }
        else{
            row+="0"
        }
    }
    console.log(row);
}
*/


//! 10.
//? * 0 0 0 0 
//? * * 0 0 0
//? * * * 0 0 
//? * * * * 0
//? * * * * *


//! 11.
//? * * * * * 
//? * * * * 0
//? * * * 0 0
//? * * 0 0 0
//? * 0 0 0 0


//! 12.
//? 0 0 0 0 *
//? 0 0 0 * *
//? 0 0 * * *
//? 0 * * * *
//? * * * * *


//! 13.
//? * * * * *
//? 0 * * * *
//? 0 0 * * *
//? 0 0 0 * *
//? 0 0 0 0 *


//! 14.
//? 0 0 * 0 0
//? 0 * * * 0
//? * * * * *
//? 0 * * * 0
//? 0 0 * 0 0



//! 07/11/2025
//?1.
/*
let n=23;
const reverseNumber= (n) => {
    let sum =0;
    while(n>0){
        sum= sum + (n%10)**2;
        n= Math.floor(n/2)
    }
    return sum;
}
console.log(reverseNumber(n));
*/

//?2.WAJCP to count how many zeros are present in given number
//90765200
/*
let n= 90765200, digit=0, count=0;
function check(n){
    while(n>0){
        digit= n%10
        if(digit===0){
            count++
        }
        n= Math.floor(n/10)
    }
    console.log(count,"no of 0 is present");
}
check(n);
*/

//?WAJSP to find first digit and a last digit of a number?

let n = 123;

const first$last = (n) => {

    let last = n % 10;

    while (n >= 10) {
        n = Math.floor(n / 10)
    }
    let first=n;
    console.log(`first digit is ${first} last digit is ${last}`);
}
first$last(n);


//? WAJSP to extract only even digits from a even number?
//? WAJSP to sum of the first and last digit of a number?
//? WAJSP to get sum of the digits which is present between first and last digit?


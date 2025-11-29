//! 07/11/2025
//?1. WAJSP to calculate sum of square of digits in the number?
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
/*
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
*/
/*
let n = 123;
function sumfirstandlast(n) {

    // if (n < 10) return n

    let firstdigit = null
    let lastdigit = n % 10

    while (n > 0) {
        firstdigit = n % 10
        n = Math.floor(n / 10)
    }
    return firstdigit + lastdigit
}
console.log(sumfirstandlast(n));
*/
//!Task
//? WAJSP to extract only even digits from a even number?
/*
    let n=123456;
    let evenDigits=" ";

    while(n>0){
        let digit = n%10;
        if(digit%2===0){
            evenDigits= digit+evenDigits;
        }
        n=Math.floor(n/10);
    }
    console.log("Even digits:", evenDigits);
*/
/*
let evendigit=[]
let odddigit=[]

let n=123456;

if(n<10) return n
while(n>0){
    if ((n%10)%2===0){
        evendigit.push(n%10)
    }
    else{
        odddigit.push(n%10)
    }
    n=Math.floor(n/10)
}
console.log(odddigit);
*/

//? WAJSP to sum of the first and last digit of a number?
/*
let n = 7435;

const sumfirst$last = (n) => {

    let num =n;
    let last = num%10;
    console.log(last);

    while (n >= 10) {
        n = Math.floor(n / 10)
    }
    let first = n;
    console.log(first);

    // let last = 7435 % 10;
    // console.log(last);

    console.log(`First Digit ${first} & Last Digit ${last}`);

    let Sum = first + last;
    console.log(`Sum of first and last digit is ${Sum}`);
}
sumfirst$last(n);
*/

//? WAJSP to get sum of the digits which is present between first and last digit?
/*
let n=12345;
 let FD=null; //FD first digit.
 let LD=n%10; //LD lastdigit.
 let SD=0; //SD sumofdigits between first and last digit.

const sumOfDigit= (n)=>{
    if(n<10) return n

 while(n>0){
    SD = SD+ n%10
    FD = n%10
    n=Math.floor(n/10)
 }
 return SD - (FD+LD)
 }
 console.log(sumOfDigit(n));
*/

/*
const sumofdigit=(n)=>{
    
let sum =0
n= Math.floor(n/10)
if(n<10) return n;
 while (n>10){
    sum= sum+ n%10

    n= Math.floor(n/10)
 }
 return sum;
}
console.log(sumofdigit(5467));
*/


//? A number is Armstrong if the sum of its digit each raised to the power of the number of digits equals the number itself?
/*
function isArmstrong(n) {
  let numStr = n.toString();
  let numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    // sum += Number(numStr[i]) ** numDigits;
    sum = sum + Number(numStr[i]) ** numDigits;
  }

  return sum === n;
}

console.log(isArmstrong(9)); 
*/



//! Tasks (for 10-11-2025)
//? 1.WAJSP A number greater than 1 that has only two factors--- 1 and itself?
/*
let num = 5; // you can change this number
let isPrime = true;

if (num <= 1) {
  console.log("Number should be greater than 1");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is not a Prime Number`);
  }
}
*/  



//? A number is strong if the sum of the factorial of its digits equals the number itself?
/*
let num = 145;
let temp= num;
let sum=0;

while (temp>0){
    let digit = temp%10;

    //calculate factorial of the digit
    let fact=1;
    for(let i=1; i<=digit; i++){
        fact = fact*i;
    }

    sum = sum+fact
    temp = Math.floor(temp/10);
}
    if(sum === num){
        console.log(`${num} is a strong Number`);
    }
    else{
        console.log(`${num} is not a strong Number`);
    }
*/



//? A number that is equal to the sum of its proper divisors (excluding itself)? (is called a perfect number)
/*
let num = 28;
let sum = 0;


for (i=1; i<num; i++){
    if(num%i === 0){
        sum = sum+i
    }
}
    if(sum === num){
        console.log(num, "is a perfect number");
    }
    else{
        console.log(num, "is not a perfect number");
    }
*/



//? WAJSP A number that reads the same backward as forward (its called palindrom number)?
/*
let n=141;
let original = n;
let reverse = 0;

while(n>0){
let digit=n%10;
    reverse= reverse*10+digit;
    n=Math.floor(n/10);
}

if(original === reverse){
    console.log(original, "is a perfect number");
}
else{
    console.log(original, "is not a perfect number");
}
*/    


//! 


//  27/10/2025

//! 1.WAP to print all the number except these 3, 3+5, 3+5+5, ...? 

// let x=3;

// for (let i = 1; i <= 100; i++) {
//    // if ((i-3) %5 == 0 && i>=3) {
//    if( i===x) {
//       x +=5;    // x= x+5
//         continue;
//     }
//     console.log(i);    
// }


//!2. WAP to print 1,3,7,15,31,63 ?

// let x=1;
//  for (let i = 0; i < 63; i++) {
//     if (i===x) {
//         console.log(x);
//         x = (2*x)+1
//     }
// }


//!3. WAP to 1,3,5,15,31... ?

// for (let i = 0; i < 10; i++) {
//     if (i===1) {
        
//         i= (2^x)-1
//     }
    
// }



// 29.10.2025

//!
/*
var x=1; //if we assign the value of x here then it will update the value.

for (let  i= 1; i<=5; i++) {
   // var x=1;   But here will print a single number for conditioned timed. (i.e. 2, 2, 2, 2, 2)
   x++
   console.log(x);    
}
*/

/*
for (let i=1; i<=5; i++) {
    console.log(i);
     for (let j=1; j<=5; j++) {
         console.log(j);        
     }
     console.log("_______");

}
*/

/*
for (let i=1; i<=5; i++) {
    var res="";   // An empty colon for every updation of i value it is empty.
    for (let j=1; j<=i; j++) {
        res+="1"  //res = res+"1"
    }
    console.log(res);
}
*/

//! 17.11.2025
//!---------------
//! wajsp to calculate the lenght of a given string without using length method
/*
function findLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++
  }
  return count
}

console.log(findLength("Rudra-Narayan-Prusty")); 
*/

// let result=findLength("Rudra-Narayan-Prusty");
// console.log(result+10);

//? Using .length method
/*
function findLength(str) {
  return str.length;
}

console.log(findLength("Rudra-Narayan-Prusty"));
*/
//? Without using function(function declaring) and calling that function
/*
let str = "Rudra Narayan Prusty";
console.log(str.length); 
*/

//! wajsp to count how many vowels are present inside a given string
/*
function countVowels(str) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++
        }
    }
    return count
}
console.log(countVowels("abcdefghijklmnopqrstuvwxyz"))
*/

//! wajsp to count how many consonant are present inside a given string
/*
function countConsonants(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]

        if (
            ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u' &&
            ch !== 'A' && ch !== 'E' && ch !== 'I' && ch !== 'O' && ch !== 'U') {
            count++
        }
    }
    return count
}
console.log(countConsonants("Rudra"));
*/

//! wajsp to check a given string is a pallindrome or not
//? with in-built methods
/*
function isPalindrome(str) {

    let reversed = str.split("").reverse().join("")

    if (str === reversed) {
        return true
    }
    else {
        return false
    }
}
 console.log(isPalindrome("dad"));
*/

/*
 function isPalindrome(str) {
//   str = str.toLowerCase();
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    // reverse += str[i];
    reverse = reverse + str[i];
  }

  return str === reverse ? "Palindrome" : "Not Palindrome";
}

console.log(isPalindrome("madam"));
*/

//? without in-built method

// function isPalindrome(str) {

//     let i = 0
//     let j = str.length - 1

//     while (i < j) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//         i++
//         j--
//     }
//     return true;
// }

// console.log(isPalindrome("malayalam"));

//! wajsp to find or to count how many words in a sentence
//? with in-built method
/*
function countWords(str) {
  return str= str.split("").length;
}
console.log(countWords("This is Node js class"));
*/

//? without in-built method
/*
function countWords(str) {
    let count = 0
    if(str.length>0 && str[0]!== ""){
        count++
    }

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === " " && str[i + 1] !== " ") {
            count++
        }
    }
    return count;
}
console.log(countWords("i love js"));
*/

//! convert given string into array format
/*
function convertArray(str){
let arr = [];
let dummy =''

for (let i = 0; i < str.length; i++) {
    if(str[i]!== ''){
        // dummy+=str[i]
        dummy= dummy+str[i]
    }
   else {
    arr.push(dummy)
    dummy=''
   }
}
if(dummy!==''){
    arr.push(dummy)
    dummy=''
}
return arr
}
console.log(convertArray("I Love Myself"))
*/

//! wajsp to find biggest and smallest words in a given string
//? input: "i love javascript"
//? output: biggest: javascript , smallest: i
/*
function bigAndsmall(str){
    let word= str.split(" ");
    
    let small =word[0];
    let big = word[0];

    for(let i=1; i<word.length; i++){
        if(word[i].length < small.length){
            small= word[i];
        }
        if(word[i].length > big.length){
            big= word[i];
        }
    }
    return `biggest:${big}, smallest:${small}`;
}
console.log(bigAndsmall("sexiest Love JavaScript"));
*/

//! Find factors
// const checkFactors = (n) => {
//     let mid = Math.round(n / 2)
//     let factors = [1]

//     if (n === 0) {
//         return []
//     }
//     for (let i = 2; i <= mid; i++) {
//         if (n % i == 0) {
//             factors.push(i)
//         }
//     }
//     factors.push(n)
//     return factors

// }
// console.log(checkFactors(10))


//! sum of factors of a given no.
// const factor_Sum = (n) => {

//     if (n === 0) {
//         return 0
//     }
//     let mid = Math.round(n / 2)
//     let factors = [1]
//     for (let i = 2; i <= mid; i++) {
//         if (n % i == 0) {
//             factors.push(i)
//         }
//     }
//     factors.push(n)
//     let sum = factors.reduce((acc, ele) => acc + ele)
//     return sum
// }
// console.log(factor_Sum(10))
// console.log(factor_Sum(11))
// console.log(factor_Sum(0))


//! Find the digits
// const findDigits=(n)=>{
//   if(n<10 && n>=0){
//     return 1
//   }
//   let digits=0
//   while(n>0){
//     digits++
//     n=Math.floor(n/10)
//   }
//   return digits
// }

// console.log(findDigits(4573))


//! Sum of digits of a given no.
// function sumOfDigits(n) {
//   let sum = 0

//   while (n > 0) {
//     sum += n % 10
//     n = Math.floor(n / 10)
//   }

//   return sum
// }

// console.log(sumOfDigits(188))


//! Reverse a num
// function reverseNumber(n) {
//   let reverse = 0
//   while (n!==0) {
//     let digit = n%10    
//     reverse = reverse * 10 + digit  
//     n= Math.floor(n/10)
//   }
//   return reverse
// }

// console.log(reverseNumber(123))


//! palindrome check
// function checkPalindrome(n) {
//   let original = n
//   let reversed = 0

//   while (n!== 0) {
//     let digit = n % 10
//     reversed = reversed * 10 + digit
//     n = Math.floor(n/10)
//   }

//   return original === reversed
// }

// console.log(checkPalindrome(121))


//! Sum of square of each digit
// function sumOfSquares(n) {
//   let sum = 0

//   while (n!== 0) {
//     let digit = n % 10     
//     sum += digit * digit
//     n = Math.floor(n/10)
//   }

//   return sum
// }
// console.log(sumOfSquares(123))


//! find 1st and last digit of a given no.
// function checkDigits(n) {
//     let first_digit = null
//     let last_digit = n % 10

//     while (n > 0) {
//         first_digit = n % 10
//         n = Math.floor(n / 10)
//     }
//     return { first_digit, last_digit }
// }
// console.log(checkDigits(123))

//! sum of 1st and last digits
// function sumOftwoDigits(n){
//     let first_digit= null
//     let last_digit= n%10
//     if(n<10){
//         return n
//     }
//     while(n>0){
//         first_digit=n%10
//         n=Math.floor(n/10)
//     }
//     return first_digit+last_digit
// }
// console.log(sumOftwoDigits(1245))


//! extract even digits of a given no.
// function findEvenDigits(n){
//     let even_digits=[]
//     let odd_digits=[]
//     if(n<10){
//         return n
//     }
//     while(n>0){
//         if((n%10)%2===0){
//             even_digits.push(n%10)
//         }
//         else{
//             odd_digits.push(n%10)
//         }
//         n=Math.floor(n/10)
//     }
//     return {even_digits,odd_digits}
// }
// console.log(findEvenDigits(267))

//! find sum of digits present in between 1st and last digits

// function findDigits(n) {
//     let first_digit = null
//     let last_digit = n % 10
//     let sumOfDigits = 0

//     if (n < 10) {
//         return n
//     }
//     while (n > 0) {
//         sumOfDigits = sumOfDigits + n % 10
//         first_digit = n % 10
//         n = Math.floor(n / 10)
//     }

//     return sumOfDigits - (first_digit + last_digit)
// }
// console.log(findDigits(1234))


//! OR

// function checkDigits(n){
//     n=Math.floor(n/10)
//     let sum=0

//     if(n<10){
//         return n
//     }

//     while(n>10){
//         sum=sum+n%10
//         n=Math.floor(n/10)
//     }
//     return sum
// }
// console.log(checkDigits(1279))

//! Armstrong number

// function Armstrong(n) {
//     let sum = 0

//     while (n > 0) {
//         let digit = n % 10
//         sum += digit ** 3
//         n = Math.floor(n / 10)
//     }

//     return sum
// }
// console.log(Armstrong(153))


//! find the factorial of given no.
// function factorial(n) {
//   let fact = 1
//   for (let i = 1; i <= n; i++) {
//     fact *= i
//   }
//   return fact
// }

// console.log(factorial(5));

//! strong number
// function StrongNum(n) {
//   let temp = n
//   let sum = 0

//   while (temp > 0) {
//     let digit = temp % 10
//     let fact = 1
//     for (let i = 1; i <= digit; i++) {
//       fact *= i
//     }

//     sum += fact
//     temp = Math.floor(temp / 10)
//   }

//   if (sum === n) {
//     return (n + " is a Strong Number");
//   } 
//   else {
//     return (n + " is not a Strong Number");
//   }
// }
// console.log(StrongNum(145))


//! perfect number
// function PerfectNum(n) {
//     let sum = 0

//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }

//     if (sum === n) {
//         return (n + " is a Perfect Number");
//     } 
//     else {
//         return (n + " is not a Perfect Number");
//     }
   
// }
//  console.log(PerfectNum(28))

//! Neon number
// function NeonNum(n) {
//   let square = n * n
//   let sum = 0

//   while (square > 0) {
//     let digit = square % 10
//     sum += digit
//     square = Math.floor(square / 10)
//   }

//   if (sum === n) {
//     return (n + " is a Neon Number");
//   } 
//   else {
//     return (n + " is not a Neon Number");
//   }
// }
// console.log(NeonNum(9))

//! Find Binary number
/*
function FindBinary(n) {
  let binary = ""

  while (n > 0) {
    let remainder = n % 2
    binary = remainder + binary
    n = Math.floor(n / 2)
  }
  return binary
}
console.log(FindBinary(9))
*/


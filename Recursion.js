//! What is recursion?
//? Recursion is when a function call itself, inorder to solve a small version of the same problem, untill a BaseCase is reach.

//! Key components of Recursion?
//? There are two componenrs of recursion there 
//? case-1 :- BaseCase (The condition that stops the recursion.)
//?           without base case the function would run forever.

//?Case-2 (Recursive case) :- The path where the function call itself with a small problem.


//! WAJSP to find a factorial of a number using recursion?
// function factorial(n) {
//     if (n == 1 || n == 0)
//         return 1
//     return n * factorial(n - 1)
// }
// console.log(factorial(5));



//!Tasks on Recursion 27-11-2025
//!Q1. WAJSP to sum of elements in an array using recursion?
/*
let arr=[4,5,3,2];
  function add(arr){
    if(arr.length == 0){
        return 0; 
    }
    return arr[0] + add(arr.slice(1));
  }
  add(arr);
  console.log(add(arr));
*/

// function sumofArray(arr, n){
//     if(n<=0){
//         return 0;
//     }
//     return arr[n-1] + sumofArray(arr, n-1);
// }
// console.log(sumofArray([4,5,3,2], 4));


//!Q2. WAJSP to find nth fibonacci series by using recursion?
//? Fibonacci means it is sum of two previous numbers of that number.
/*
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
*/

// function fibonacci(n){
//     if(n <= 1){
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n - 2)
// }
// console.log(fibonacci(8));


//!Q3. WAJSP count digits in a number using recursion?
// function countDigits(num){
//     if(num ==0){
//         return 0;
//     }
//     return countDigits(Math.floor(num/10))+1;
// }
// console.log(countDigits(987654321));

/*
function countDigits(num, digit=0){
    if(num ==0){
        return digit;
    }
    return countDigits(Math.floor(num/10), digit+1);
}
console.log(countDigits(987654321));
*/

//? Normal procedure to count digits in a number.
/*
function countDigitsNormal(num){
    let count = 0;

    while(num > 0){
        num = Math.floor(num / 10);  // remove last digit
        count++;                    // increase counter
    }

    return count;
}

console.log(countDigitsNormal(987654321));
*/

//!Q4. WAJSP checks a given string is a pallendrom or not using recursion?
//? Apalindrom is a string or number that reads the same backward as forward, e.g., madam or 121.
/*
function palindrome(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length -1]){
        return false;
    }
    return palindrome(str.slice(1, -1));
}
console.log(palindrome("madam"));
*/


//!Q5. WAJSP sum of the digits in a given number using recursion?
function sum(n){
    if(n == 0){
        return 0;
    }
    return (n%10) + sum(Math.floor(n/10));
}
console.log(sum(4325));
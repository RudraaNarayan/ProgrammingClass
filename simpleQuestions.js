//? 24.11.2025
//! write a function to find largest number in the array?
// function findlargestArr(arr){
//     let largest=arr[0];

//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest=arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findlargestArr([3,5,7,2,8,6]));


//! Return the sum of elements in an array?
//  function sumofArray(arr){
//     let sum=0;

//     for(let i=0; i<arr.length; i++){
//         // sum+=arr[i];
//         sum= sum+arr[i];
//     }
//     return sum;
//  }
//  console.log(sumofArray([2,3,4,5]));


//! Count how many even numbers are in an array?
// function countevenNumbers(arr){
//     let count=0;
//     for (let i=0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countevenNumbers([20,1,10,3,50,0,2,33]));


//! Removes duplicates from an array (without using set) ?
//   function removeDuplicates(arr){
//     let result=[];

//     for(let i=0; i<arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;
//   }
//     console.log(removeDuplicates([1,2,2,3,4,4,5,5]));

//? Using Set method 
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// // Output: [1, 2, 3, 4, 5]


//! Find the index of a given element in an array?
// function findIndex(arr, element){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === element){
//               return i;
//         }
//     }
//     return false;
// }
// console.log(findIndex([1,2,3,4,5], 6));  


//! Reverse an array without using Reverse() ?
// function reverseArr(arr){
//     let result=[];

//     for(let i=arr.length-1; i>=0; i--){
//         result.push(arr[i]);
//     }

//     return result;
// }
// console.log(reverseArr([10,20,30,40,50]));


//! Check if an array contains a specific value. ?
// function specificArr(arr){
//     let value=1;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===value){
//             return true;
//         }
//     }
//     return false;
// }    
// console.log(specificArr([1,2,3,4,7]));


//! Merge two arrays into one?
//    function mergeArrays(arr1, arr2){
//     let result=[];
//     let index=0;

//     for(let i=0; i<arr1.length; i++){
//         result[index]=arr1[i];
//         index++;
//     }
//     for(let j=0; j<arr2.length; j++){
//         result[index]=arr2[j];
//         index++;
//     }
//     return result;
//    }
//    console.log(mergeArrays([1,2,3],[4,5,6]));


//! Find the smallest number in an array?
//    function findSmallestArr(arr){
//     let smallest = arr[0];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<smallest){
//             smallest= arr[i];
//         }
//     }
//     return smallest;
//    }
//    console.log(findSmallestArr([14,5,6,7,8]));


//! Convert a string into an array of words (without using split())?
// function StringtoArray(str) {
//     let res = [];
//     let word = "";

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             // word+=str[i];
//             word = word + str[i];
//         }
//         else {
//             if (word.length > 0) {
//                 res.push(word);
//                 word = " ";
//             }
//         }
//     }
//     if(word.length > 0){
//         res.push(word);
//     }
//     return res;
// } 
// console.log(StringtoArray("Hello world this is OpenAI"))


//! procedure to write a arrow function?

// let a= 4, b=5;
// function add(a, b){
//     return a+b;
// }



// const add = (a , b) => {
//     return a+b;
// }
// console.log(add(4,5));
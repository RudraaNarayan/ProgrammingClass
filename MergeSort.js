//! Merge Sort
//? Merge sort is a divide and conquer sorting algorithm.
   //? * Divides the array into two halves.
   //? * Recursively sorts each half.
   //? * Merge the two sorted halves into a single sorted array.
   //? * Note:- It is one of the most efficient sorting algorithms for large data sets. 
/*
 function MergeSort(arr){
    let mid = Math.floor(arr.length/2);

    let leftarr = arr.slice(0 , mid);
    let rightarr = arr.slice(mid);

    console.log(arr);
    // console.log(rightarr);
 }
//  console.log(MergeSort([3,4,2,5,6]));
*/

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right){
   let sorted = [];
   let i=0, j=0;

   while(i < left.length && j < right.length){
      if( left[i] < right[j]){
         sorted.push(left[i]);
         i++;
      }else{
         sorted.push(right[j]);
         j++;
      }
   }
   while (i < left.length) {
      sorted.push(left[i]);
      i++;
   }

   while (j < right.length){
      sorted.push(right[j]);
      j++;
   }

   return sorted;
}

console.log(mergeSort([20, 10, 30, 80, 90]));
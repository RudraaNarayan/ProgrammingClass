//!Q1. Sort an array of integers in descending order using bubble sort?
/*
function BubbleSortDescending(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]<arr[j+1]){
                // arr[j],arr[j+1]= arr[j+1], arr[j];
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
            }
        }
    }
    return arr;
}
console.log(BubbleSortDescending([4,2,9,1,7]));
*/


//!Q2. Sort an array of strings alphabetically using bubble sort?
// function BubbleSortString (arr){
//     for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-i-1; j++){
//         if(arr[j]>arr[j+1]){
//             //  arr[j],arr[j+1]= arr[j+1], arr[j];
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
//     }
//     return arr;
// }
// console.log(BubbleSortString(["bananna","apple","date","cherry"]));


//!Q3. Sort an array of integers in ascending order using selection sort?
// function AscSelectionSortInt(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         minIndex = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }
// console.log(AscSelectionSortInt([5, 4, 8, 9, 6]));


//!Q4. Find the second smallest number using selection sort logic?
function secondSmallest(arr) {
    if (arr.length < 2) return null;

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } 
        else if(arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}
console.log(secondSmallest([5, 3, 8, 1, 2]));
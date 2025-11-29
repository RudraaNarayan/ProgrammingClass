//! 
function selectionSort(arr){

    for(let i=0; i<arr.length; i++){

        let minIndex= i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }

        // let temp= arr[i];
        // arr[i]=arr[minIndex];
        // arr[minIndex]=temp;
        [arr[i], arr[minIndex]]= [arr[minIndex], arr[i]]
    }
    return arr;
   }
   console.log(selectionSort([4,2,5,1]));


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
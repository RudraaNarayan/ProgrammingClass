//! Insertion sorrt for all values ?
function insertion(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i]
        let j = i-1;

        while( j>=0 && arr[j] > current ){
            arr[j+1] = arr[j];
            j-- ;
        }
        arr[j+1] = current;
    }
    return arr;
}
console.log(insertion([-2,-4,-2,-1]));


//!WAJP to count how many shifts insertion sort perform to sort an array? [8,4,3,5,1]
 function countShiftsInsertionSort(arr){
    let shiftCount = 0;
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j= i-1;

        while(j>=0 && arr[j]>current){
            arr[j+1]= arr[j];
            j--;
            shiftCount++;
        } 
        arr[j+1] = current;
    }
    return shiftCount
 }
 console.log(countShiftsInsertionSort([8,4,3,5,1]));
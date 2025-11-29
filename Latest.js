//! How to convert a sentence into array?
/*
let str = "hello sundari how are you";

let res=[]

let word=""
for(let i=0;i<str.length;i++){
    if(str[i] !== " "){
        word+=str[i]
    }
    else{
        // res.push(word)
        res[index]=word
        index++
        word=""
    }
}
if (word){
    res[index]=word
    word=""
}

console.log(res);
*/


//! Merging two arrays into one ?
/*
function mergeArrays(arr1, arr2) {
    let res=[];
    let index=0;

    for(let i=0;i<arr1.length;i++){
        res[index]=arr1[i];
        index++;
    }
    for(let j=0;j<arr2.length;j++){
        res[index]=arr2[j];
        index++;
    }
    console.log(res);
}

mergeArrays([1,2,3,4,5], [6,7,8,9,10]) // [1,2,3,4,5,6,7,8,9,10]
*/


//! return unique elements in an array?

//? input [1,2,2,3,4,4,5]
//? output - [1,3,5]
/*
function uniqueElements(arr) {
  let freq = {};
  
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let result = [];
  for (let key in freq) {
    if (freq[key] === 1) {
      result.push(Number(key));
    }
  }

  return result;
}

console.log(uniqueElements([1,2,2,3,4,4,5])); 
*/

/*
function uniqueElements(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(uniqueElements([1,2,2,3,4,4,5]));
*/
/*
function uniqueElements(arr) {
  const map = new Map();

  arr.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  return arr.filter(n => map.get(n) === 1);
}

console.log(uniqueElements([1,2,2,3,4,4,5]));
*/


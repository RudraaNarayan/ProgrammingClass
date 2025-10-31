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

for (let i=1; i<=5; i++) {
    var res="";   // An empty colon for every updation of i value it is empty.
    for (let j=1; j<=i; j++) {
        res+="1"  //res = res+"1"
    }
    console.log(res);
}
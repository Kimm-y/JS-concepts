//@ARRAYS
/**(Also known as lists)
 * A sequence of data types separated by commas and enclosed in square brackets
 * 
 * EG
 * [ 1,2,3,4,5.6][[ Mary, Jane, Peter, Michael], [1,2,3,4]]
 * 
 * when counting items from a list you start from index 0
 * 
 * 
 * To get the LENGTH of a list use the .length property
 * let mixture = [ 'peter', 4 ,'Mary' , true, undefined ]
console.log( mixture[2])
console.log('length of the mixture list' , mixture.length)


 */

//@Iteration - a sequence until you get the final results

// for( let i = 0 ; i < names.length ; i++){console.log(i)}

// @MANIPULATION OF ARRAYS
/**
 * Push- add an item at the end of an array
 * Pop - removes an item at the end of an array
 * 
 * unshift- adds an item at the beginning of an array
 * shift- removes an item at the beginning of an array
 * 
 */


//for loops
// let n = parseFloat(prompt ('enter number'))

// for( i = 1 ; i < 15; i++ ){
//     console.log( i);
// }


//while loops
 while(condition){} //do something }

// let i = 0;
// while (i < 5) {
//   console.log("Iteration " + i);
//   i++;
// }


// do...while loops

 do {} while(condition)
// let i = 0;
// do {
//   console.log("Iteration " + i);
//   i++;
// } while (i < 5);

// RECURSION
/**
 *  Process of recalling a function with a different value inside it
 * 
 */
// Factorial
/**
 *  product of integers , all the integers preceding it!
 * 
 * 
 */


//  function factorial(n){
//     if ( n<= 1){
//         return 1
//     }

//     return n * factorial(n-1)

//  }

//FIBONACCI

// function fibanacci2(n) {
//     if ( n<= 0){
//         return []
//     }

//     sequence = [0] * (n + 1)
//     sequence [ 1] = 1

//     for ( let i = 2; i < n ; i++) {
//         sequence[i]= sequence [i -1] + sequence [i-2]
//     }

//     return  sequence[n-1] + sequence [n-2]
// }


 let fib = function(i){
   if ( i <= 1){ return i;
   }

       
    return fib = (i-1) + ( i-2);
 }; console.log(fib(8))
  



 //RECURSION



//  const factorial = (n)=> {
//     if (n <= 2){
//         return n
//     }

//     return n* factorial(n-1)
//  }

//  console.log(factorial(6))
//  }
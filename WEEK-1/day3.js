//for loops
// let n = parseFloat(prompt ('enter number'))

// for( i = 1 ; i < 15; i++ ){
//     console.log( i);
// }


//while loops
// let i = 0;
// while (i < 5) {
//   console.log("Iteration " + i);
//   i++;
// }


// do...while loops
// let i = 0;
// do {
//   console.log("Iteration " + i);
//   i++;
// } while (i < 5);


let fib = function(i){
    if ( i === 1){ return 0;
    }

     if (i === 2) { return 1;
    }

     if ( i === 3) {return 1;
    }

    if ( i === 4) {return 2 ;
    }
       
    return fib = (i-1) + ( i-2);

}; console.log(fib(8))
// conditional structures
/**
 * If...else trying to fulfill 2 commands
 * (equals to sign - assignment)
 * 
 * let school =" Zindua"

if ( school === ' Zindua') {
    console.log ( 'Zindua School')
} else { console.log ( ' Not Zindua School ')}

/ best for javascript
let age = 10

if( age >= 10) {
    console.log ( 'you are 10')

} else if ( age > 30 && age > 10) {
    console.log ('you are between 10 and 30')
} else { console.log ('you are not 10')}

// short hand syntax
let results = age > 10 ? ' you are greater than 10' 
 * 
 * //LOGICAL OPERATORS
 * @STRICTLYEQUAL - ===
 * 
 * @AND - &&
 * @OR - ||
 * @GREATERTHAN - >
 * @GREATERTHANOREQUALTO - >=
 * @LESSTHAN - <
 * @LESSTHANOREQUALTO - <=
 * @NOT - !
 * @NOTEQUAL - !==
 * 

 */

//SWITCHCASE
/**
 * works the same as if...else
 */
// let name = ' Dan'

// switch(name){
//     case ' Dan': console.log (' I am Dan')
//     break;
//     case 'Walobwa': console.log ('I am Walobwa')
//         break;
//     default:
//         console.log (' I am not Dan or Walobwa')
//         break;
// }



//FUNCTIONS

/**
 * Function is used in all languages, its syntax s different in JS
 */

//  let name = 'console health'

//  function consoleHello(){ // function declaration
//     console.log ('HELLO') // function definition/body - what the function is supposed to execute
//   return ' Hello' // how to end a function, you can only have two returns if conditions are used
//  }

//  consoleHello()// function call/invocation

//FOR LOOPS
// for ( let i = 10 ; i= number; i++){ console.log(i)}

// MODULUS
//  let number = 15
//  console.log ( number % 5)






//HOMEWORK
let n = parseInt(prompt('Enter a number.'))
let sum = 0

for ( let i= 1; i <n; i++) 
{
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i)
        sum = sum + i;    
    }
   
   
} console.log(sum)






 

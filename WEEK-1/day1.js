/**
 * @VAR
 * [ YOU CAN DO EVERYTHING- OLDEST VERSION]
 * you can redeclare a variable
 * var name = " dan"
 * var name =" James"
 
 
 * you can reassign
 * var name = " Dan"
 * name = " James"
 
 * @LET 
  * You can't redeclare a variable
  
  * let name = " Dan"
  * let name = " James" [ x]
  
  * You can reassign a variable
  * let name = " Dan"
  * name =" James"
  
  
  * @CONST   ...IT REMAINS CONSTANT
  
  * You can't reassign or Redeclare  a variable
  
  * const name = " Dan"

 */


/** DATA TYPES - any value that can be held
 * 
 * Primitive data types
 * @STRINGS = characters/numbers wrapped in quotes { "Dan" or '123'}
 * 
 * 
 * @NUMBERS = decimals, whole numbers, negative numbers [ no fractions]
 * { 1, 1.5 , -0.5}
 * 
 * @BOOLEANS = true or false
 * 
 * @UNDEFINED =  no value assigned, but expected
 * 
 * @NULL = no value, nothing will be added
 * 
 * 
 * Non-primitive data-types
 * 
 * @LIST = arrays
 * It can be a list of any of the primitive data types 
 * [ "Dan" 1,2,3]
 * @OBJECTS = Dictionaries [ key/value pairs]
 */

//OPERATORS
/**
 * @DIVISION - /
 * @ADDITION -> +
 * @SUBTRACTION -> -
 * @MULTIPLICATION -> *
 * @MODULUS -> %
 * 
 */


//REVENUE
//EXPENSES
//COST OF GOODS SOLD
//PROFIT

const costofsock = 50
const costofbag = 50
const costofbatch =  (costofsock * 3) 
const sellingprice = 1000
const revenue = (sellingprice * 30) * 70/100
const costofsoldsocks = costofsock * 90
const costofsoldtBags = costofsoldsocks * 30

const profit = 1000 - (500 + 200)

const numberofsocks = 100
const remainingsocks = 10


console.log(profit)



//PARSEINT (10,20) (10.5, 20.5)
/** int- stands for interger
 * converting strings to  whole numbers
 */
//PARSEFLOAT
/**
 * converting strings to numbers especially if they have decimals
 * if a number is recorded as a string parseFloat converts it to a number 
 * needed for calculations because they need to be numbers 
 */
//NUMBER


let length =  parseFloat(prompt ("length of rectangle"))
let width = parseFloat(prompt ( "width of rectangle"))

let area = length * width ;
let perimeter = (length + width) * 2


console.log( typeof length)
console.log( typeof width)
console.log(`Area :${area}`);
console.log(`Perimeter :${perimeter}`);




function checkString( length ){ if(typeof string === "string"){
    console.log(!isNaN(string));
  } }


  // single line comment
  /**
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   */
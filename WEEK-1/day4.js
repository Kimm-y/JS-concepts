//OBJECTS
/**
 * Objects are data structures that can store multiple values
 * 
 * EG
  let person = {
    name : "John",
    age : " 25",
};

console.log( person.name);
console.log( person["age"]);
 



 */

const array = 
[
    { name: 'Alice' , age : 25 , city : 'New York'} ,
    { name: 'Bob' , age : 30 , city : 'Chicago'} ,
    { name: 'charlie' , age : 35 , city : 'New York'} ,
    { name: 'Dave' , age : 40 , city : 'Chicago'} 
];

const result1 = Object.groupBy(array, ({ name }) => name);

const result2 = Object.groupBy(array, ({ age }) => age);

const result3 = Object.groupBy(array, ({ city }) => city);

console.log(result1)
console.log(result2)
console.log(result3)
 



 

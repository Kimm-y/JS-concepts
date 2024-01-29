//OBJECTS
/**
 * Objects are data structures that can store multiple values
 * Enclosed with curly brackets
 * 
 * EG
  let person = {
    name : "John",
    age : " 25",
    school: " Zindua School"
    personalities : [ "kind" , "Patient" , "wise"],
};

sound : function(){ console.log (" I am a human being")} 
 // anonymous function, called when the sound property is called

console.log( person.name);
console.log( person["age"]);
 



 */


// let person = {
//     name : "John",
//      age : " 25",
//     school: " Zindua School" ,
//     personalities : [ "kind" , "Patient" , "wise"],
//     hobbies : {
//          indoor : [ 'reading', 'cooking'],
//         outdoor: [ 'hiking', 'swimming']
//      }
//  };
//  console.table( Object.keys(person))

// console.log( person.name)
// console.log( person.hobbies.indoor[1])

//   sound: function(){ console.log (" I am a human being")} 
 // anonymous function, called when the sound property is called




// DAY 4 CHALLENGE
// const array = 
// [
//     { name: 'Alice' , age : 25 , city : 'New York'} ,
//     { name: 'Bob' , age : 30 , city : 'Chicago'} ,
//     { name: 'charlie' , age : 35 , city : 'New York'} ,
//     { name: 'Dave' , age : 40 , city : 'Chicago'} 
// ];

// const result1 = Object.groupBy(array, ({ name }) => name);

// const result2 = Object.groupBy(array, ({ age }) => age);

// const result3 = Object.groupBy(array, ({ city }) => city);

// function printpeople (){
    
// for ( let i = 0 ; i < array.length; i++)
// {  console.log(arrray[i].name)}
// }

// printpeople()

// console.log(result1)
// console.log(result2)
// console.log(result3)


let people =

[
    { name: 'Alice' , age : 25 , city : 'New York'} ,
    { name: 'Bob' , age : 30 , city : 'Chicago'} ,
    { name: 'charlie' , age : 35 , city : 'New York'} ,
    { name: 'Dave' , age : 40 , city : 'Chicago'} 
] 
function groupBy(arr, property){

    let grouped = {}
    for ( let i = 0; i< arr.length ; i++) {
        console.log ( arr[i])
        let person = arr [i]
        let key = person[property]
        console.log(key)

        if ( !grouped[key]) {
            grouped[key] = [person]
        } else {
            grouped[key].push(person)
        }
        
    }
          return grouped
}

console.log(groupBy( people,'city'))

// function printPeople (){
    
//     for ( let i = 0 ; i < people.length; i++)
//     {  console.log(people[i].name)}
//     }
    
//     printPeople()
 



 

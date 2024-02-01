/**
 * @DOM (manipulation)
 * 
 */
// console.log(document.body.children.item(0).innerText)

//  console.log(document.body.style)
//  document.body.style.backgroundColor='red'


/**
 * @ACCESSING
 * 
 * QUERYSELECTORS
 * // QuerySelectors are the best for now
 * SYNTAX - document.querySelector
let heading =  document.querySelector('#heading')
heading.innerText= 'yellow'


// if element were to be accessed using Id or class names
document.getElementById ('heading')
document.getElementsByClassName('heading')
 */


/**
 * @EVENTLISTENERS
 */



//   let clickMeButton = document.querySelector('.click-me-button')
//   let textcontent = document.querySelector ('.text-content')
 

//   clickMeButton.addEventListener('click', ()=>{
//     textcontent.innerText= 'hello,world!'
//   }) 


  
//   clickMeButton.addEventListener('click',()=> {
//     document.body.style.backgroundColor='black'
//   })

  //mouseover-hovers but colour stays constant
  //mouseout- hover functionality
//   let searchBox = document.querySelector('.input')
//   searchBox.addEventListener( 'change' , () => {
//     console.log(searchBox.value)

//   }) 


let clickMeButton = document.querySelector('.click-me-button')
let textContent= document.querySelector('.text-content')
let initialText= clickMeButton.innerText



clickMeButton.addEventListener('click', ()=> {
    if ( textContent.innerText === initialText) {
        textContent.innerText='Hello,world!'
    } else {
        textContent.innerText=initialText
    }
})
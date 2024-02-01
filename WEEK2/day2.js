/**
 * 
 */




//challenge

let clickMeButton1= document.querySelector('.click-me-button1')
 let clickMeButton2 = document.querySelector('.click-me-button2')
  
clickMeButton1.style.backgroundColor='red'
clickMeButton2.style.backgroundColor='aqua'


let initialBackground = document.body.style.backgroundColor=' black'
 console.log(initialBackground)


clickMeButton1.addEventListener( 'click',(e) => {
  e.stopPropagation()
   document.body.style.backgroundColor= clickMeButton1.style.backgroundColor
 } )

 clickMeButton2.addEventListener( 'click',(e) => {
  e.stopPropagation()
    document.body.style.backgroundColor= clickMeButton2.style.backgroundColor
  } )


   document.body.addEventListener('click',()=> {
  if (document.body.style.backgroundColor !== initialBackground ) {
    document.body.style.backgroundColor= initialBackground
      
  }
  console.log('body clicked')

   })
    
 


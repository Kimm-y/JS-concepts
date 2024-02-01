

const parentContainer = document.querySelector('.parent-container')

parentContainer.addEventListener('click', (e) => { 
  console.log(e)
  if (e.target.tagName === 'SPAN') {
    let subContainer = e.target.nextElementSibling
    subContainer.classList.toggle('hidden')
    }

  })

  //   if ( subList.classList.contains('hidden'))
  //   {
  //     subList.classList.remove('hidden')

  //   } else {
  //     subList.classList.add('hidden')
  //   }


  // }



// const sublist= document.querySelector('.sublist')




// function toggle(){
//   let sublist = document.querySelector('.sublist')
//   if(
//     sublist.display==='none'
//   ){ sublist.display= 'block'}
//   else{
//     sublist.display= 'none'
//   }
// };
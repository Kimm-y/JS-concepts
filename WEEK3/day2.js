// const container = document.querySelector('.container')
// const fetchData= require('./data.json');


// const displayData = ()=>{
// fetchData.products.forEach((product) => {
//     console.log(product.title)
//     console.log(product.thumbnail)
//     console.log(product.variants[0].prices[1].amount)
// })
// }

// displayData()

    //    data.results.forEach((product) => {
    //     console.log(product)
    //     const card = document.createElement('div')
    //     card.classList.add('card')
    //     card.innerHTML= `<div> ${product.name}</div>`

        // container.appendChild(card)
    // });


    // fetchData()


// data= require.data.json
// fetch('https://api.walobwa.xyz/store/products')
// .then(response => response.json)
// .then(data=> console.log(data))
// .catch(error=> console.error('Error:',error));
//  data = JSON.parse(data);

//        data.results.forEach((product) => {
//     console.log(product) });


  
//CHALLENGE

// const API_KEY = '0ec8e2e08b5241aca9132825240802';

// const fetchData = async() =>{ 
//     const response = await fetch (`http://weatherapi.com = ${API_KEY}`)
//     const data = await response.json()
//     console.log(data)
// }


const API_KEY = '0ec8e2e08b5241aca9132825240802';

fetch(`http://weatherapi.com=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  console.log(data)
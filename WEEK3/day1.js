
//TWO types of API'S
/**
 * REST
 * GRAPH QL
 */
// json- java script object notation
// used to link data from the backend to the frontend
// Convert the response to user readable data

//ASYNC/AWAIT METHOD- convert API to the UI
//  async function fetchData(){} //function declaration
// const fetchData = async ()=> {} // arrow function

 let container = document.querySelector('.container')
const fetchData= async () => {
const response = await fetch ( 'https://rickandmortyapi.com/api/character')
const data = await response.json()
const characters = data.results
console.log(data)

characters.forEach((character) => {
    console.log(character.name)
    const card = document.createElement('div')
    card.classList.add('card')
    //method 1
    // card.textContent= character.name 
    // container.appendChild(card)

    //method 2
    card.innerHTML= ` <div> <img src = "${character.image}"/> </div> 
    <div class= "text">
    <p class="name"> ${character.name} </p> 
    <p> ${character.status} </p> 
    <p class="species"> ${character.species} </p> 
    <p> ${character.location.name} </p> 
    <p> ${character.origin.name} </p> </div>`
       
    
       

//     var s=document.getElementsByTagName('p');
//         for(i=0;i<s.length;i++)
//  {
//     s[i].setAttribute("style","font-size: 2rem"+p_var+"px");
//               }
    container.appendChild(card)
   

 
    
});
}

fetchData()

//Time is unknown and can be affected by internet speed and your browser speed
//status code = 200(OK) || 404(NOT FOUND)


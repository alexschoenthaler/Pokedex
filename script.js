const BASE_URL = "https://pokeapi.co/api/v2/";
let path = "pokemon?limit=30&offset=0";
let content = document.getElementById('content');
async function init() {
    await ShowPokemons();
}

async function GetPokemons() {

   try {
    let response = await fetch(BASE_URL + path +'.json');
    let responseAsJson = await response.json();
    return responseAsJson;
    
   } catch (error) {
    //html aufrufen mit custom Error Message
   }   
    
}

async function ShowPokemons() {
 let responseAsJson  = await GetPokemons();
 let pokemons = responseAsJson.results;
 let pokemonID = -2;
 
    for (let index = 0; index < pokemons.length; index+=3) {
        
        console.log(pokemons[index].name);
        pokemonID+=3;
        content.innerHTML += pokemonCard(pokemons[index].name, pokemonID);
    }
    
}
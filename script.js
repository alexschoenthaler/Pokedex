const BASE_URL = "https://pokeapi.co/api/v2/";
let content = document.getElementById('content');
let pokemonsDetail = [];

async function init() {
    await renderPokemons();
    // console.log(pokemonsDetail);
}

async function GetPokemons(path) {

   try {
    let response = await fetch(path);
    let responseAsJson = await response.json();
    return responseAsJson;
    
   } catch (error) {
    //html aufrufen mit custom Error Message
   }   
    
}

async function renderPokemons() {
 let responseAsJson  = await GetPokemons("https://pokeapi.co/api/v2/pokemon?limit=31&offset=0");
 let pokemons = responseAsJson.results;
 
    for (let pokemonIndex = 0; pokemonIndex < pokemons.length; pokemonIndex++) {    
       
        pokemonsDetail.push(await GetPokemons(pokemons[pokemonIndex].url));
        let pokemonType = GetPokemonTypes(pokemonIndex);
        content.innerHTML += pokemonCard(pokemons[pokemonIndex].name, pokemonIndex, pokemonType[0].firstType, pokemonType[0].secondType);
    }
    
}

function GetPokemonTypes(pokemonIndex) {
    let pokemonTypes = []
    let pokemonFirstType = pokemonsDetail[pokemonIndex].types[0].type.name;
    let pokemonSecondType = pokemonsDetail[pokemonIndex].types[1] === undefined ? "" : pokemonsDetail[pokemonIndex].types[1].type.name;
    pokemonTypes.push({
        firstType:pokemonFirstType,
        secondType:pokemonSecondType
    })
    return pokemonTypes;
}


let content = document.getElementById('content');
let pokemonsDetail = [];
let pokemonIndex = 30;
let addedNewPokemons = 31;


async function init() {
    await StartPokemons();
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

async function StartPokemons(){
    let responseAsJson  = await GetPokemons("https://pokeapi.co/api/v2/pokemon?limit=31&offset=0");
    let pokemons = responseAsJson.results;
    let pokemonindex = -1;
    renderPokemons(pokemons, pokemonindex);
}

async function renderPokemons(pokemons, pokemonindex) {
    for (let index = 0; index < pokemons.length; index++) {    
        pokemonindex++;
        pokemonsDetail.push(await GetPokemons(pokemons[index].url));
        let pokemonType = GetPokemonTypes(pokemonindex);
        content.innerHTML += pokemonCard(pokemons[index].name, pokemonindex, pokemonType[0].firstType, pokemonType[0].secondType);
    }
    
}

function GetPokemonTypes(index) {
    let pokemonTypes = []
    let pokemonFirstType = pokemonsDetail[index].types[0].type.name;
    let pokemonSecondType = ``;
    switch (pokemonsDetail[index].types[1]) {
        case undefined:      
            break;
        default:
            pokemonSecondType = `../assets/img/PokemonTypes/${pokemonsDetail[index].types[1].type.name}.png`;
            break;
    }
    pokemonTypes.push({
        firstType:pokemonFirstType,
        secondType:pokemonSecondType
    })
    return pokemonTypes;
}

async function LoadMorePokemons() {
    let responseAsJson  = await GetPokemons(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${addedNewPokemons}`);
    let pokemons = responseAsJson.results;
    console.log(pokemons);
    renderPokemons(pokemons, pokemonIndex);  
    addedNewPokemons+=20;
    pokemonIndex +=20;
}

function SearchPokemons(){
    
    
}
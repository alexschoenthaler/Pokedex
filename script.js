
let content = document.getElementById('content');
let refpokemonSearch = document.getElementById('pokemonSearch');
let pokemonsDetail = [];
let pokemonsIDs = [];
let pokemonsNames = [];
let pokemonIndex = 30;
let addedNewPokemons = 31;


async function init() {
    await StartPokemons();
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

async function StartPokemons() {
    let responseAsJson = await GetPokemons("https://pokeapi.co/api/v2/pokemon?limit=31&offset=0");
    let pokemons = responseAsJson.results;
    let pokemonindex = -1;
    renderPokemons(pokemons, pokemonindex);
}

async function renderPokemons(pokemons, pokemonindex) {
    for (let index = 0; index < pokemons.length; index++) {
        pokemonindex++;
        pokemonsDetail.push(await GetPokemons(pokemons[index].url));
        let pokemonType = GetPokemonTypes(pokemonindex);
        let pokemonName = capitalizeFirstLetter(pokemons[index].name);
        content.innerHTML += pokemonCard(pokemonName, pokemonindex, pokemonType[0].firstType, pokemonType[0].secondType);
    }
    GetPokemonSearchData();
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
        firstType: pokemonFirstType,
        secondType: pokemonSecondType
    })
    return pokemonTypes;
}

async function LoadMorePokemons() {
    let responseAsJson = await GetPokemons(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${addedNewPokemons}`);
    let pokemons = responseAsJson.results;
    renderPokemons(pokemons, pokemonIndex);
    addedNewPokemons += 20;
    pokemonIndex += 20;
    console.log(pokemonsDetail, pokemonsIDs);
}

function GetPokemonSearchData() {
    pokemonsDetail.forEach(element => {
        pokemonsIDs.push(element.id);
        pokemonsNames.push(element.name);
    });
}

refpokemonSearch.addEventListener("submit", e => {
    e.preventDefault();
    SearchPokemons();
})

function SearchPokemons() {
    let input = document.getElementById("inputSearch");
    emtyingSiteContent();
    let filter = input.value.toUpperCase();
    for (let searchIndex = 0; searchIndex < pokemonsNames.length; searchIndex++) {
        let pokemonName = pokemonsNames[searchIndex].toUpperCase();
        if (pokemonName.indexOf(filter) > -1) {
            RenderSearchedPokemons(pokemonsNames[searchIndex], pokemonsIDs[searchIndex] -1);
        };
        } 
    }
 
function emtyingSiteContent() {
    let refButtonContainer = document.getElementById("buttonContainer");
    content.innerHTML = "";
    refButtonContainer.innerHTML = "";
}

function RenderSearchedPokemons(foundPokemons, foundPokemonsIDs) {
    let pokemonType = GetPokemonTypes(foundPokemonsIDs);
    let pokemonNames = capitalizeFirstLetter(foundPokemons);
    content.innerHTML += pokemonCard(pokemonNames, foundPokemonsIDs, pokemonType[0].firstType, pokemonType[0].secondType);
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


const content = document.getElementById('content');
const refpokemonSearch = document.getElementById('inputSearch');
const refButtonContainer = document.getElementById('buttonContainer');
let pokemonsDetail = [];
let pokemonCards = [];
let pokemonTypes = [];
let allPokemonsFound = [];
let limitPokemons = 31;
let offsetPokemons = 0;

/** Initializes the app and loads the first Pokemon */
async function init() {
    await GetPokemons();
}

/** Fetches Pokemon data from the API using the specified path */
async function GetData(path) {
    try {
        let response = await fetch(path);
        let responseAsJson = await response.json();
        return responseAsJson;

    } catch (error) {
    }
}

/** Loads Pokemon data from the API and stores it in global arrays */
async function GetPokemons() {
    startLoadingSpinner();
    let responseAsJson = await GetData(`https://pokeapi.co/api/v2/pokemon?limit=${limitPokemons}&offset=${offsetPokemons}`);
    let pokemons = responseAsJson.results;
    for (let index = 0; index < pokemons.length; index++) {
        pokemonsDetail.push(await GetData(pokemons[index].url));
        GetPokemonTypes(index + offsetPokemons);
    }
    renderPokemons();
    offsetPokemons += limitPokemons;
    if (offsetPokemons >= 651) {
        refButtonContainer.innerHTML = "";
    }
    stopLoadingSpinner();
}

/** Renders all loaded Pokemon as cards in the content area */
function renderPokemons() {
    for (let index = offsetPokemons; index < pokemonsDetail.length; index++) {
        let pokemonType = pokemonTypes[index];
        let pokemonName = capitalizeFirstLetter(pokemonsDetail[index].name);
        pokemonCards.push(pokemonCard(pokemonName, index, pokemonType.firstType, pokemonType.secondType));
    }
    content.innerHTML = pokemonCards.join("");
}

/** Extracts the types of a Pokemon (first and optional second type) */
function GetPokemonTypes(index) {
    let pokemonFirstType = pokemonsDetail[index].types[0].type.name;
    let pokemonSecondType = ``;
    switch (pokemonsDetail[index].types[1]) {
        case undefined:
            break;
        default:
            pokemonSecondType = `./assets/img/PokemonTypes/${pokemonsDetail[index].types[1].type.name}.png`;
            break;
    }
    pokemonTypes.push({
        firstType: pokemonFirstType,
        secondType: pokemonSecondType
    })
}

/** Loads 20 more Pokemon and adds them to the display */
async function LoadMorePokemons() {
    limitPokemons = 20;
    await GetPokemons();
}

/** Searches loaded Pokemon by search term */
function SearchPokemons() {
    const input = document.getElementById("inputSearch");
    const refMessageErr = document.getElementById("MessageErr");

    if (input.value.length >= 3) {
        startTheSearch(input, refMessageErr);

    } else if (input.value.length == 0) {
        returnToStart();
    } else {
        refMessageErr.innerHTML = "min. 3C";
        setTimeout(() => {
            refMessageErr.innerHTML = "";
        }, 3000)
    }
}

/** Executes the search logic and displays matching Pokemon */
function startTheSearch(input, refMessageErr) {
    startLoadingSpinner();
    refMessageErr.innerHTML = "";
    emtyingSiteContent();
    allPokemonsFound = [];
    let filter = input.value.toUpperCase();
    let count = 0;
    for (let searchIndex = 0; searchIndex < pokemonsDetail.length; searchIndex++) {
        let pokemonName = pokemonsDetail[searchIndex].name.toUpperCase();
        if (pokemonName.indexOf(filter) > -1) {
            RenderSearchedPokemons(pokemonsDetail[searchIndex].name, pokemonsDetail[searchIndex].id - 1);
            count++;
        };
    }
    if (count == 0) {
        content.innerHTML = 'No Pokemon with this Search found';
    }
    stopLoadingSpinner();
}

/** Resets the app to initial state and reloads all Pokemon */
function returnToStart() {
    emtyingSiteContent();
    refButtonContainer.innerHTML = '<button class="btn btn-outline-success" onclick="LoadMorePokemons()">More Pokemons</button>';
    pokemonsDetail = [];
    pokemonTypes = [];
    allPokemonsFound = [];
    pokemonCards = [];
    limitPokemons = 31;
    offsetPokemons = 0;
    init();

}

/** Empties the content area and button container */
function emtyingSiteContent() {
    content.innerHTML = "";
    refButtonContainer.innerHTML = "";
}

/** Renders a found Pokemon from the search results */
function RenderSearchedPokemons(foundPokemons, foundPokemonsIDs) {
    let pokemonType = pokemonTypes[foundPokemonsIDs];
    let pokemonNames = capitalizeFirstLetter(foundPokemons);
    content.innerHTML += searchPokemonCard(pokemonNames, foundPokemonsIDs, pokemonType.firstType, pokemonType.secondType);
    allPokemonsFound.push(foundPokemonsIDs);
}

/** Converts the first letter of a string to uppercase */
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}




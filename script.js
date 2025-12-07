
let content = document.getElementById('content');
let refpokemonSearch = document.getElementById('pokemonSearch');
let refButtonContainer = document.getElementById("buttonContainer");
let pokemonsDetail = [];
let pokemonsIDs = [];
let pokemonsNames = [];
let pokemonImges = [];
let pokemonTypes = [];
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

async function GetPokemons() {
    startLoadingSpinner();
    let responseAsJson = await GetData(`https://pokeapi.co/api/v2/pokemon?limit=${limitPokemons}&offset=${offsetPokemons}`);
    let pokemons = responseAsJson.results;
    for (let index = 0; index < pokemons.length; index++) {
        pokemonsDetail.push(await GetData(pokemons[index].url));
        GetPokemonTypes(index + offsetPokemons);
        await getPokemonImg(index + offsetPokemons);
    }
    GetPokemonSearchData();
    renderPokemons();
    offsetPokemons += limitPokemons;
    stopLoadingSpinner();
}

async function renderPokemons() {
    for (let index = offsetPokemons; index < pokemonsDetail.length; index++) {
        let pokemonType = pokemonTypes[index];
        let pokemonName = capitalizeFirstLetter(pokemonsNames[index]);
        content.innerHTML += pokemonCard(pokemonName,index,pokemonType.firstType,pokemonType.secondType);
        }
}

/** Loads the SVG image of a Pokemon and adds CSS class */
async function getPokemonImg(pokemonindex) {
    let refImg = await fetch(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonindex + 1}.svg`);
    let refImgTxt = await refImg.text();
    pokemonImges.push(refImgTxt.substring(0, 44) + 'class= "pokemonImg" ' + refImgTxt.substring(44, refImgTxt.length));
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
    GetPokemons()
}

/** Creates lists of IDs and names for the search function */
function GetPokemonSearchData() {
    pokemonsIDs = [];
    pokemonsNames = [];
    pokemonsDetail.forEach(element => {
        pokemonsIDs.push(element.id);
        pokemonsNames.push(capitalizeFirstLetter(element.name));
    });
}

refpokemonSearch.addEventListener("submit", e => {
    e.preventDefault();
    SearchPokemons();
})

/** Searches loaded Pokemon by search term */
function SearchPokemons() {
    let input = document.getElementById("inputSearch");
    let refMessageErr = document.getElementById("MessageErr");

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
    refMessageErr.innerHTML = "";
    emtyingSiteContent();
    let filter = input.value.toUpperCase();
    let count = 0;
    for (let searchIndex = 0; searchIndex < pokemonsNames.length; searchIndex++) {
        let pokemonName = pokemonsNames[searchIndex].toUpperCase();
        if (pokemonName.indexOf(filter) > -1) {
            RenderSearchedPokemons(pokemonsNames[searchIndex], pokemonsIDs[searchIndex] - 1);
            count++;
        };
    }
    if (count == 0) {
        content.innerHTML = 'No Pokemon with this Search found'
    }
}

/** Resets the app to initial state and reloads all Pokemon */
function returnToStart() {
    emtyingSiteContent();
    refButtonContainer.innerHTML = '<button class="btn btn-outline-success" onclick="LoadMorePokemons()">More Pokemons</button>';
    pokemonsDetail = [];
    pokemonsIDs = [];
    pokemonsNames = [];
    pokemonImges = [];
    pokemonTypes = [];
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
    content.innerHTML += pokemonCard(pokemonNames, foundPokemonsIDs, pokemonType.firstType, pokemonType.secondType);
}

/** Converts the first letter of a string to uppercase */
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

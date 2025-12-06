
let content = document.getElementById('content');
let refpokemonSearch = document.getElementById('pokemonSearch');
let refButtonContainer = document.getElementById("buttonContainer");
let pokemonsDetail = [];
let pokemonsIDs = [];
let pokemonsNames = [];
let pokemonImges = [];
let pokemonIndex = 30;
let addedNewPokemons = 31;

/** Initializes the app and loads the first Pokemon */
async function init() {
    await StartPokemons();
}

/** Fetches Pokemon data from the API using the specified path */
async function GetPokemons(path) {
    try {
        let response = await fetch(path);
        let responseAsJson = await response.json();
        return responseAsJson;

    } catch (error) {
    }
}

/** Loads the first 31 Pokemon when the app starts */
async function StartPokemons() {
    let responseAsJson = await GetPokemons("https://pokeapi.co/api/v2/pokemon?limit=31&offset=0");
    let pokemons = responseAsJson.results;
    let pokemonindex = -1;
    await renderPokemons(pokemons, pokemonindex);
}

/** Renders a list of Pokemon as cards in the content area */
async function renderPokemons(pokemons, pokemonindex) {
    for (let index = 0; index < pokemons.length; index++) {
        pokemonindex++;
        pokemonsDetail.push(await GetPokemons(pokemons[index].url));
        let pokemonType = GetPokemonTypes(pokemonindex);
        let pokemonName = capitalizeFirstLetter(pokemons[index].name);
        await getPokemonImg(pokemonindex);
        content.innerHTML += pokemonCard(pokemonName, pokemonindex, pokemonType[0].firstType, pokemonType[0].secondType);
    }
    GetPokemonSearchData();
}

/** Loads the SVG image of a Pokemon and adds CSS class */
async function getPokemonImg(pokemonindex) {
    let refImg = await fetch(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonindex + 1}.svg`);
    let refImgTxt = await refImg.text();
    pokemonImges.push(refImgTxt.substring(0, 44) + 'class= "pokemonImg" ' + refImgTxt.substring(44, refImgTxt.length));
}

/** Extracts the types of a Pokemon (first and optional second type) */
function GetPokemonTypes(index) {
    let pokemonTypes = []
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
    return pokemonTypes;
}

/** Loads 20 more Pokemon and adds them to the display */
async function LoadMorePokemons() {
    let responseAsJson = await GetPokemons(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${addedNewPokemons}`);
    let pokemons = responseAsJson.results;
    await renderPokemons(pokemons, pokemonIndex);
    stopLoadingSpinner();
    addedNewPokemons += 20;
    pokemonIndex += 20;
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
    init();

}

/** Empties the content area and button container */
function emtyingSiteContent() {
    content.innerHTML = "";
    refButtonContainer.innerHTML = "";
}

/** Renders a found Pokemon from the search results */
function RenderSearchedPokemons(foundPokemons, foundPokemonsIDs) {
    let pokemonType = GetPokemonTypes(foundPokemonsIDs);
    let pokemonNames = capitalizeFirstLetter(foundPokemons);
    content.innerHTML += pokemonCard(pokemonNames, foundPokemonsIDs, pokemonType[0].firstType, pokemonType[0].secondType);
}

/** Converts the first letter of a string to uppercase */
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const content = document.getElementById('content');
const refpokemonSearch = document.getElementById('inputSearch');
const refButtonContainer = document.getElementById('buttonContainer');
let pokemonsDetail = [];
let pokemonCards = [];
let pokemonTypes = [];
let allPokemonsFound = [];
let limitPokemons = 31;
let offsetPokemons = 0;

/**
 * Initializes the application and loads the first Pokemon.
 *
 * @returns {Promise<void>}
 */
async function init() {
    await GetPokemons();
}

/**
 * Loads JSON data from the provided API URL.
 *
 * @param {string} path API endpoint or resource to load.
 * @returns {Promise<Object|undefined>} The parsed JSON data or `undefined` if an error occurs.
 */
async function GetData(path) {
    try {
        let response = await fetch(path);
        let responseAsJson = await response.json();
        return responseAsJson;

    } catch (error) {
    }
}

/**
 * Loads Pokemon data from the API and stores it in the global arrays.
 *
 * @returns {Promise<void>}
 */
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

/**
 * Renders all newly loaded Pokemon as cards in the content area.
 *
 * @returns {void}
 */
function renderPokemons() {
    for (let index = offsetPokemons; index < pokemonsDetail.length; index++) {
        let pokemonType = pokemonTypes[index];
        let pokemonName = capitalizeFirstLetter(pokemonsDetail[index].name);
        pokemonCards.push(pokemonCard(pokemonName, index, pokemonType.firstType, pokemonType.secondType));
    }
    content.innerHTML = pokemonCards.join("");
}

/**
 * Determines the types of a Pokemon and stores them in the type array.
 *
 * @param {number} index Index of the Pokemon in the detail array.
 * @returns {void}
 */
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

/**
 * Loads additional Pokemon and appends them to the view.
 *
 * @returns {Promise<void>}
 */
async function LoadMorePokemons() {
    limitPokemons = 20;
    await GetPokemons();
}

/**
 * Starts a search within the already loaded Pokemon.
 *
 * @returns {void}
 */
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

/**
 * Executes the search logic and renders matching results.
 *
 * @param {HTMLInputElement} input Input field containing the current search term.
 * @param {HTMLElement} refMessageErr Element used for validation or error messages.
 * @returns {void}
 */
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

/**
 * Resets the application to its initial state and reloads the data.
 *
 * @returns {void}
 */
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

/**
 * Clears the content area and removes temporary buttons.
 *
 * @returns {void}
 */
function emtyingSiteContent() {
    content.innerHTML = "";
    refButtonContainer.innerHTML = "";
}

/**
 * Renders a found Pokemon from the search results.
 *
 * @param {string} foundPokemons Name of the found Pokemon.
 * @param {number} foundPokemonsIDs Index or ID offset of the Pokemon.
 * @returns {void}
 */
function RenderSearchedPokemons(foundPokemons, foundPokemonsIDs) {
    let pokemonType = pokemonTypes[foundPokemonsIDs];
    let pokemonNames = capitalizeFirstLetter(foundPokemons);
    content.innerHTML += searchPokemonCard(pokemonNames, foundPokemonsIDs, pokemonType.firstType, pokemonType.secondType);
    allPokemonsFound.push(foundPokemonsIDs);
}

/**
 * Converts the first character of a string to uppercase.
 *
 * @param {string} val Text whose first character should be capitalized.
 * @returns {string} The formatted string.
 */
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}




/**
 * Generates the HTML for a Pokemon card in the overview.
 *
 * @param {string} pokemonName Display name of the Pokemon.
 * @param {number} pokemonNumber Index of the Pokemon in the data array.
 * @param {string} pokemonFirstType Primary type of the Pokemon.
 * @param {string} pokemonSecondType Image path for the secondary type or an empty string.
 * @returns {string} HTML markup for the Pokemon card.
 */
function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick =" opendialog('cardDetails'), showDialogContent(pokemonDialog(${pokemonNumber}))">
            <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber + 1}.svg">
            <span>${pokemonName}</span>
            <img src="./assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`
}

/**
 * Generates the HTML for the detail view of a Pokemon in the dialog.
 *
 * @param {number} pokemonNumber Index of the Pokemon in the data array.
 * @param {number} [switchCardindex=1] Indicates the mode used for navigation.
 * @returns {string} HTML markup for the dialog detail view.
 */
function pokemonDialog(pokemonNumber, switchCardindex = 1) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <img class="nextCard" onclick ="previousCardPokemonDialog(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/left.png" alt="arrow_left">
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber + 1}.svg">
                    <img class="nextCard" onclick ="nextCardPokemonDialog(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/right.png" alt="arrow_right">
                </div>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>${pokemonsDetail[pokemonNumber].name}</td>
                    </tr>
                    <tr>
                        <td>Ability(s):</td>
                        <td>${getDialogAbylities(pokemonNumber)}</td>
                    </tr>
                    <tr>
                        <td>Height:</td>
                        <td>${pokemonsDetail[pokemonNumber].height}m</td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td>${pokemonsDetail[pokemonNumber].weight}kg</td>
                    </tr>
                    <tr>
                        <td>Type(s):</td>
                        <td>${getDialogTypes(pokemonNumber)}</td>
                    </tr>
                </table>
            </article>
                <div class="statsContainer">
                    <img src="./assets/icons/icons8-stats-64.png" class ="stats" onclick = "showDialogContent(statsDialog(${pokemonNumber}))"></img>     
                </div>
            </div>`
}

/**
 * Generates the HTML for the stats view of a Pokemon in the dialog.
 *
 * @param {number} pokemonNumber Index of the Pokemon in the data array.
 * @param {number} [switchCardindex=1] Indicates the mode used for navigation.
 * @returns {string} HTML markup for the dialog stats view.
 */
function statsDialog(pokemonNumber, switchCardindex = 1) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <img class="nextCard" onclick ="previousCardStatsDialog(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/left.png" alt="arrow_left">
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber + 1}.svg">
                    <img class="nextCard" onclick ="nextCardStatsDialog(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/right.png" alt="arrow_right">
                </div>
                <table>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[0].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[0].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[0].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[1].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[1].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[1].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[2].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[2].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[2].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>sp. attack</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[3].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[3].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>sp. defense</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[4].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[4].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[5].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[5].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[5].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </article>
                <div class="statsContainer">
                    <img src="./assets/icons/icons8-info-100.png" class ="stats" onclick = "showDialogContent(pokemonDialog(${pokemonNumber}))"></img>   
                </div>
            </div>
            `
}

/**
 * Generates the HTML for a Pokemon card within the search results.
 *
 * @param {string} pokemonName Display name of the Pokemon.
 * @param {number} pokemonNumber Index of the Pokemon in the data array.
 * @param {string} pokemonFirstType Primary type of the Pokemon.
 * @param {string} pokemonSecondType Image path for the secondary type or an empty string.
 * @returns {string} HTML markup for the search result card.
 */
function searchPokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick =" opendialog('cardDetails'), showDialogContent(searchPokemonDialog(${pokemonNumber}))">
            <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber + 1}.svg">
            <span>${pokemonName}</span>
            <img src="./assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`
}

/**
 * Generates the HTML for the detail view of a search result in the dialog.
 *
 * @param {number} pokemonNumber Index of the Pokemon in the data array.
 * @param {number} [switchCardindex=2] Indicates the search mode for navigation.
 * @returns {string} HTML markup for the dialog detail view of a search result.
 */
function searchPokemonDialog(pokemonNumber, switchCardindex = 2) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <img class="nextCard" id="nextCardLeft" onclick ="previousCardSearch(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/left.png" alt="arrow_left">
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber + 1}.svg">
                    <img class="nextCard" id="nextCardRight" onclick ="nextCardSearch(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/right.png" alt="arrow_right">
                </div>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>${pokemonsDetail[pokemonNumber].name}</td>
                    </tr>
                    <tr>
                        <td>Ability(s):</td>
                        <td>${getDialogAbylities(pokemonNumber)}</td>
                    </tr>
                    <tr>
                        <td>Height:</td>
                        <td>${pokemonsDetail[pokemonNumber].height}m</td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td>${pokemonsDetail[pokemonNumber].weight}kg</td>
                    </tr>
                    <tr>
                        <td>Type(s):</td>
                        <td>${getDialogTypes(pokemonNumber)}</td>
                    </tr>
                </table>
            </article>
                <div class="statsContainer">
                    <img src="./assets/icons/icons8-stats-64.png" class ="stats" onclick = "showDialogContent(searchStatsDialog(${pokemonNumber}))"></img>     
                </div>
            </div>`
}

/**
 * Generates the HTML for the stats view of a search result in the dialog.
 *
 * @param {number} pokemonNumber Index of the Pokemon in the data array.
 * @param {number} [switchCardindex=2] Indicates the search mode for navigation.
 * @returns {string} HTML markup for the dialog stats view of a search result.
 */
function searchStatsDialog(pokemonNumber, switchCardindex = 2) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <img class="nextCard" id="nextCardLeft" onclick ="previousCardStatsSearch(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/left.png" alt="arrow_left">
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber + 1}.svg">
                    <img class="nextCard" id="nextCardRight" onclick ="nextCardStatsSearch(${pokemonNumber}, ${switchCardindex})" src="./assets/icons/right.png" alt="arrow_right">
                </div>
                <table>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[0].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[0].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[0].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[1].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[1].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[1].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[2].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[2].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[2].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>sp. attack</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[3].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[3].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>sp. defense</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[4].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[4].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[5].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[5].base_stat}%; background-color: green !important;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[5].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </article>
                <div class="statsContainer">
                    <img src="./assets/icons/icons8-info-100.png" class ="stats" onclick = "showDialogContent(searchPokemonDialog(${pokemonNumber}))"></img>   
                </div>
            </div> `
}


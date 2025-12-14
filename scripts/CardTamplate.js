/** Generates HTML for a Pokemon card */
function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick =" opendialog('cardDetails'), showDialogContent(pokemonDialog(${pokemonNumber}))">
            <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg">
            <span>${pokemonName}</span>
            <img src="./assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`

}

/** Generates HTML for the detail view of a Pokemon in the dialog */
function pokemonDialog(pokemonNumber, switchCardindex = 1) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <span class="nextCard" onclick ="previousCardPokemonDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB2;</span>
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg">
                    <span class="nextCard" onclick ="nextCardPokemonDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB3;</span>
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

/** Generates HTML for the stats view of a Pokemon in the dialog */
function statsDialog(pokemonNumber, switchCardindex = 1) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <span class="nextCard" onclick ="previousCardStatsDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB2;</span>
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg">
                    <span class="nextCard" onclick ="nextCardStatsDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB3;</span>
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

/** Generates HTML for a Pokemon card in search results */
function searchPokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick =" opendialog('cardDetails'), showDialogContent(searchPokemonDialog(${pokemonNumber}))">
            <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg">
            <span>${pokemonName}</span>
            <img src="./assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`
}

/** Generates HTML for the detail view of a Pokemon from search results */
function searchPokemonDialog(pokemonNumber, switchCardindex = 2) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <span id ="previousCard" class="nextCard" onclick ="previousCardPokemonDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB2;</span>
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg">
                    <span id ="nextCard" class="nextCard" onclick ="nextCardPokemonDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB3;</span>
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

/** Generates HTML for the stats view of a Pokemon from search results */
function searchStatsDialog(pokemonNumber, switchCardindex = 2) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                <div class = "switchCards">
                    <span id ="previousCard" class="nextCard" onclick ="previousCardStatsDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB2;</span>
                    <img class= "pokemonImg" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg">
                    <span id ="nextCard" class="nextCard" onclick ="nextCardStatsDialog(${pokemonNumber}, ${switchCardindex})">&#x2BB3;</span>
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
            </div>
            `
}


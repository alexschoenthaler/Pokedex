/** Generates HTML for a Pokemon card */
function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick =" opendialog('cardDetails'), showDialogContent(pokemonDialog(${pokemonNumber}))">
            ${pokemonImges[pokemonNumber]}
            <span>${pokemonName}</span>
            <img src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`

}
/** Generates HTML for the detail view of a Pokemon in the dialog */
function pokemonDialog(pokemonNumber) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                ${pokemonImges[pokemonNumber]}
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>${pokemonsNames[pokemonNumber]}</td>
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
                <div class ="arrows">
                    <span class ="arrow" onclick = "showDialogContent(statsDialog(${pokemonNumber}))">&#129172;</span>
                    <span class ="arrow" onclick = "showDialogContent(statsDialog(${pokemonNumber}))">&#129174;</span>
                </div>
            </div>`
}

/** Generates HTML for the stats view of a Pokemon in the dialog */
function statsDialog(pokemonNumber) {
    return `<div class="dialogCardDetails" onclick="event.stopPropagation()">
            <article class="dialogCardDetails">
                ${pokemonImges[pokemonNumber]}
                <table>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[0].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[0].base_stat}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[0].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[1].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[1].base_stat}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[1].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[2].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[2].base_stat}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[2].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>sp. attack</td>
                        <td><div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[3].base_stat}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[3].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>sp. defense</td>
                        <td><div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[4].base_stat}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[4].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>${pokemonsDetail[pokemonNumber].stats[5].stat.name}</td>
                        <td><div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width:${pokemonsDetail[pokemonNumber].stats[5].base_stat}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${pokemonsDetail[pokemonNumber].stats[5].base_stat}</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </article>
                <div class ="arrows">
                    <span class ="arrow" onclick = "showDialogContent(pokemonDialog(${pokemonNumber}))">&#129172;</span>
                    <span class ="arrow" onclick = "showDialogContent(pokemonDialog(${pokemonNumber}))">&#129174;</span>
                </div>
            </div>
            `
}

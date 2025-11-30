function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick ="opendialog('cardDetails'), showDialogContent(pokemonDialog(${pokemonNumber}))">
            ${pokemonImges[pokemonNumber]}
            <span>${pokemonName}</span>
            <img src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`

}

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
                        <td>${pokemonsDetail[pokemonNumber].height}</td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td>${pokemonsDetail[pokemonNumber].weight}</td>
                    </tr>
                    <tr>
                        <td>Type(s):</td>
                        <td>${getDialogTypes(pokemonNumber)}</td>
                    </tr>
                </table>
            </article>
                <div class ="arrows">
                    <span class ="arrow" onclick("showDialogContent(statsDialog(${pokemonNumber}))")>&#129172;</span>
                    <span class ="arrow" onclick("")>&#129174;</span>
                </div>
            </div>`
}

function statsDialog(pokemonNumber) {
    return `<div>
                <span>${pokemonsDetail[pokemonNumber].stats[0].stat.name}</span>
                <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            `
}
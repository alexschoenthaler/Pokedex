function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick ="opendialog('cardDetails'), showDialogContent(${pokemonNumber})">
            ${pokemonImges[pokemonNumber]}
            <span>${pokemonName}</span>
            <img class = "pokemonImgType" src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img class = "pokemonImgType" src ="${pokemonSecondType}">
            </div>`

}

function pokemonDialog(pokemonNumber) {
    return `<div class="dialogCardDetails">
            ${pokemonImges[pokemonNumber]}
            <span>Name: ${pokemonsNames[pokemonNumber]}</span>
            <span>Abilitys: ${pokemonsDetail[pokemonNumber].abilities[0].ability.name}</span>
            </div>`
}
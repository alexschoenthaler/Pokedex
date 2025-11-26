function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick ="opendialog('cardDetails')">
            ${pokemonImg[pokemonNumber]}
            <span>${pokemonName}</span>
            <img class = "pokemonImgType" src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img class = "pokemonImgType" src ="${pokemonSecondType}">
            </div>`

}

function pokemonDialog(pokemonName, pokemonNumber) {
    return `<div>
            ${pokemonImg[pokemonNumber]}
            <span>${pokemonName}</span>
            </div>`
}
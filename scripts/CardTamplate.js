function pokemonCard(pokemonName, pokemonNumber, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card" onclick ="opendialog('cardDetails')">
            <img class = "pokemonImg" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg" alt="Pokemon">
            <span>${pokemonName}</span>
            <img class = "pokemonImgType" src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img class = "pokemonImgType" src ="${pokemonSecondType}">
            </div>`

}

function pokemonDialog(pokemonName, pokemonNumber) {
    return `<div>
            <img class = "pokemonImg" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonNumber +1}.svg" alt="Pokemon">
            <span>${pokemonName}</span>
            </div>`
}
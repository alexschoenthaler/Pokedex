function pokemonCard(pokemonNAME, pokemonNUMBER, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType} holographic-card">
            <img class = "pokemonImg" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonNUMBER +1}.svg" alt="Pokemon">
            <span>${pokemonNAME}</span>
            <img class = "pokemonImgType" src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img class = "pokemonImgType" src ="${pokemonSecondType}">
            </div>`

}
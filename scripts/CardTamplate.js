function pokemonCard(pokemonNAME, pokemonNUMBER, pokemonFirstType, pokemonSecondType) {
    return `<div class = "card type-${pokemonFirstType}">
            <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonNUMBER +1}.svg" alt="Pokemon">
            <span>${pokemonNAME}</span>
            <img src="../assets/img/PokemonTypes/${pokemonFirstType}.png" alt="${pokemonFirstType}">
            <img src ="${pokemonSecondType}">
            </div>`

}
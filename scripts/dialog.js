
let dialogPokemonDescription = [];

/** Opens the dialog with animation */
function opendialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.showModal();
    refdialog.classList.remove('closed');
    refdialog.classList.add('opend');   
}

/** Closes the dialog with animation */
function closedialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.classList.add('closed');
    refdialog.classList.remove('opend');
    setTimeout(()=>{                    
    refdialog.close();
    },200)    
}

/** Updates the dialog content with a new template */
async function showDialogContent(tamplate) {
    let refcardDetails = document.getElementById('cardDetails');
    refcardDetails.innerHTML ="";
    refcardDetails.innerHTML = tamplate;
    if (allPokemonsFound.length == 1) {
        document.getElementById("previousCard").classList.add("displayNone");
        document.getElementById("nextCard").classList.add("displayNone");
    }
}

/** Extracts all abilities of a Pokemon for display */
function getDialogAbylities(pokemonNumber){
    let abylities = [];
    pokemonsDetail[pokemonNumber].abilities.forEach(element => {
        abylities.push(element.ability.name)
    });
    return abylities;  
}

/** Extracts all types of a Pokemon for dialog display */
function getDialogTypes(pokemonNumber){
    let types = [];
    pokemonsDetail[pokemonNumber].types.forEach(element => {
        types.push(element.type.name)
    });
    return types;  
}

/** Navigates to the next Pokemon in the dialog (handles both normal and search mode) */
function nextCardPokemonDialog(pokemonNumber, index){
    if (index == 1){
        nextCardSart(pokemonNumber);
    }else{
        nextCardSearch(pokemonNumber);
    }
}

/** Shows the next Pokemon in normal browsing mode */
function nextCardSart(pokemonNumber){
    if (pokemonNumber >= pokemonsDetail.length -1) {
        pokemonNumber = 0;
    }else{
        pokemonNumber++;
    }
    showDialogContent(pokemonDialog(pokemonNumber));
}

/** Shows the next Pokemon in search results */
function nextCardSearch(pokemonNumber) {
    let pokemonNextCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);

    if (pokemonNextCardSearchIndex +1>= allPokemonsFound.length) {
        pokemonNumber = allPokemonsFound[0];
        pokemonNextCardSearchIndex= 0;
    }else{
        pokemonNextCardSearchIndex++;
        pokemonNumber = allPokemonsFound[pokemonNextCardSearchIndex];
    }
    showDialogContent(searchPokemonDialog(pokemonNumber));   
}

/** Navigates to the previous Pokemon in the dialog (handles both normal and search mode) */
function previousCardPokemonDialog(pokemonNumber, index) {
   if (index == 1){
        previousCardSart(pokemonNumber);
    }else{
        previousCardSearch(pokemonNumber);
    }
}

/** Shows the previous Pokemon in normal browsing mode */
function previousCardSart(pokemonNumber){
     if (pokemonNumber == 0) {
        pokemonNumber = pokemonsDetail.length -1;
    }else{
        pokemonNumber--;
    }
    showDialogContent(pokemonDialog(pokemonNumber));
}

/** Shows the previous Pokemon in search results */
function previousCardSearch(pokemonNumber) {
    let pokemonPreviousCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);
     if (pokemonPreviousCardSearchIndex <= 0) {
        pokemonNumber = allPokemonsFound[allPokemonsFound.length-1];
        pokemonPreviousCardSearchIndex= allPokemonsFound.length;
    }else{
        pokemonPreviousCardSearchIndex--;
        pokemonNumber = allPokemonsFound[pokemonPreviousCardSearchIndex];
    }
    showDialogContent(searchPokemonDialog(pokemonNumber));   
}

/** Navigates to the next Pokemon in the stats dialog (handles both normal and search mode) */
function nextCardStatsDialog(pokemonNumber, index){
    if (index == 1){
        nextCardStatsSart(pokemonNumber);
    }else{
        nextCardStatsSearch(pokemonNumber);
    }
}

/** Shows the next Pokemon stats in normal browsing mode */
function nextCardStatsSart(pokemonNumber){
    if (pokemonNumber >= pokemonsDetail.length -1) {
        pokemonNumber = 0;
    }else{
        pokemonNumber++;
    }
    showDialogContent(statsDialog(pokemonNumber));
}

/** Shows the next Pokemon stats in search results */
function nextCardStatsSearch(pokemonNumber) {
    let pokemonNextCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);

    if (pokemonNextCardSearchIndex +1>= allPokemonsFound.length) {
        pokemonNumber = allPokemonsFound[0];
        pokemonNextCardSearchIndex= 0;
    }else{
        pokemonNextCardSearchIndex++;
        pokemonNumber = allPokemonsFound[pokemonNextCardSearchIndex];
    }
    showDialogContent(searchStatsDialog(pokemonNumber));   
}

/** Navigates to the previous Pokemon in the stats dialog (handles both normal and search mode) */
function previousCardStatsDialog(pokemonNumber, index) {
   if (index == 1){
        previousCardStatsSart(pokemonNumber);
    }else{
        previousCardStatsSearch(pokemonNumber);
    }
}

/** Shows the previous Pokemon stats in normal browsing mode */
function previousCardStatsSart(pokemonNumber){
     if (pokemonNumber == 0) {
        pokemonNumber = pokemonsDetail.length -1;
    }else{
        pokemonNumber--;
    }
    showDialogContent(statsDialog(pokemonNumber));
}

/** Shows the previous Pokemon stats in search results */
function previousCardStatsSearch(pokemonNumber) {
    let pokemonPreviousCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);
     if (pokemonPreviousCardSearchIndex <= 0) {
        pokemonNumber = allPokemonsFound[allPokemonsFound.length-1];
        pokemonPreviousCardSearchIndex= allPokemonsFound.length;
    }else{
        pokemonPreviousCardSearchIndex--;
        pokemonNumber = allPokemonsFound[pokemonPreviousCardSearchIndex];
    }
    showDialogContent(searchStatsDialog(pokemonNumber));   
}




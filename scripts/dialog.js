
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

function nextCardPokemonDialog(pokemonNumber){
    if (pokemonNumber >= pokemonsDetail.length -1) {
        pokemonNumber = 0;
    }else{
        pokemonNumber++;
    }
    showDialogContent(pokemonDialog(pokemonNumber));
}

function previousCardPokemonDialog(pokemonNumber) {
    if (pokemonNumber == 0) {
        pokemonNumber = pokemonsDetail.length -1;
    }else{
        pokemonNumber--;
    }
    showDialogContent(pokemonDialog(pokemonNumber));
}

function nextCardStatsDialog(pokemonNumber){
    if (pokemonNumber >= pokemonsDetail.length -1) {
        pokemonNumber = 0;
    }else{
        pokemonNumber++;
    }
    showDialogContent(statsDialog(pokemonNumber));
}

function previousCardStatsDialog(pokemonNumber) {
    if (pokemonNumber == 0) {
        pokemonNumber = pokemonsDetail.length -1;
    }else{
        pokemonNumber--;
    }
    showDialogContent(statsDialog(pokemonNumber));
}



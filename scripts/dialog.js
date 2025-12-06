
let dialogPokemonDescription = [];

/** Open the Dialog with animation*/
function opendialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.showModal();
    refdialog.classList.remove('closed');
    refdialog.classList.add('opend');   
}

/**Close the Dialog with animation */
function closedialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.classList.add('closed');
    refdialog.classList.remove('opend');
    setTimeout(()=>{                    
    refdialog.close();
    },200)    
}

async function showDialogContent(tamplate) {
    let refcardDetails = document.getElementById('cardDetails');
    refcardDetails.innerHTML ="";
    refcardDetails.innerHTML = tamplate;
}

function getDialogAbylities(pokemonNumber){
    let abylities = [];
    pokemonsDetail[pokemonNumber].abilities.forEach(element => {
        abylities.push(element.ability.name)
    });
    return abylities;  
}

function getDialogTypes(pokemonNumber){
    let types = [];
    pokemonsDetail[pokemonNumber].types.forEach(element => {
        types.push(element.type.name)
    });
    return types;  
}

async function getDialogDescription(pokemonNumber) {
    dialogPokemonDescription = [];
    let refResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber+1}/`);
    let refResponseasJson =  await refResponse.json();
    let pokemonDescription = refResponseasJson.flavor_text_entries[1].flavor_text;
    dialogPokemonDescription.push(pokemonDescription);
}


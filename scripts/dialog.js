
/** @type {string[]} Temporary storage for additional dialog descriptions. */
let dialogPokemonDescription = [];

/**
 * Opens a dialog and starts the opening animation.
 *
 * @param {string} ID DOM ID of the dialog element to open.
 * @returns {void}
 */
function opendialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.showModal();
    refdialog.classList.remove('closed');
    refdialog.classList.add('opend');
}

/**
 * Closes a dialog with a short closing animation.
 *
 * @param {string} ID DOM ID of the dialog element to close.
 * @returns {void}
 */
function closedialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.classList.add('closed');
    refdialog.classList.remove('opend');
    setTimeout(() => {
        refdialog.close();
    }, 200)
}

/**
 * Replaces the current dialog content with a new HTML template.
 *
 * @param {string} tamplate HTML string that should be displayed in the dialog.
 * @returns {void}
 */
function showDialogContent(tamplate) {
    const refcardDetails = document.getElementById('cardDetails');
    refcardDetails.innerHTML = "";
    refcardDetails.innerHTML = tamplate;
    if (allPokemonsFound.length == 1) {
        document.getElementById('nextCardLeft').classList.add("displayNone");
        document.getElementById('nextCardRight').classList.add("displayNone");
    }
}

/**
 * Extracts all abilities of a Pokemon for the detail view.
 *
 * @param {number} pokemonNumber Index of the Pokemon in the detail array.
 * @returns {string[]} List of all abilities of the Pokemon.
 */
function getDialogAbylities(pokemonNumber) {
    let abylities = [];
    pokemonsDetail[pokemonNumber].abilities.forEach(element => {
        abylities.push(element.ability.name)
    });
    return abylities;
}

/**
 * Extracts all types of a Pokemon for the detail view.
 *
 * @param {number} pokemonNumber Index of the Pokemon in the detail array.
 * @returns {string[]} List of all types of the Pokemon.
 */
function getDialogTypes(pokemonNumber) {
    let types = [];
    pokemonsDetail[pokemonNumber].types.forEach(element => {
        types.push(element.type.name)
    });
    return types;
}

/**
 * Switches to the next Pokemon in the dialog and handles list and search mode.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @param {number} index Mode flag for normal view or search view.
 * @returns {void}
 */
function nextCardPokemonDialog(pokemonNumber, index) {
    if (index == 1) {
        nextCardSart(pokemonNumber);
    } else {
        nextCardSearch(pokemonNumber);
    }

}

/**
 * Shows the next Pokemon in normal browsing mode.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function nextCardSart(pokemonNumber) {
    if (pokemonNumber >= pokemonsDetail.length - 1) {
        pokemonNumber = 0;
    } else {
        pokemonNumber++;
    }
    showDialogContent(pokemonDialog(pokemonNumber));
}

/**
 * Shows the next Pokemon within the search results.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function nextCardSearch(pokemonNumber) {
    let pokemonNextCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);

    if (pokemonNextCardSearchIndex + 1 >= allPokemonsFound.length) {
        pokemonNumber = allPokemonsFound[0];
        pokemonNextCardSearchIndex = 0;
    } else {
        pokemonNextCardSearchIndex++;
        pokemonNumber = allPokemonsFound[pokemonNextCardSearchIndex];
    }
    showDialogContent(searchPokemonDialog(pokemonNumber));
}

/**
 * Switches to the previous Pokemon in the dialog and handles list and search mode.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @param {number} index Mode flag for normal view or search view.
 * @returns {void}
 */
function previousCardPokemonDialog(pokemonNumber, index) {
    if (index == 1) {
        previousCardSart(pokemonNumber);
    } else {
        previousCardSearch(pokemonNumber);
    }
}

/**
 * Shows the previous Pokemon in normal browsing mode.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function previousCardSart(pokemonNumber) {
    if (pokemonNumber == 0) {
        pokemonNumber = pokemonsDetail.length - 1;
    } else {
        pokemonNumber--;
    }
    showDialogContent(pokemonDialog(pokemonNumber));
}

/**
 * Shows the previous Pokemon within the search results.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function previousCardSearch(pokemonNumber) {
    let pokemonPreviousCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);
    if (pokemonPreviousCardSearchIndex <= 0) {
        pokemonNumber = allPokemonsFound[allPokemonsFound.length - 1];
        pokemonPreviousCardSearchIndex = allPokemonsFound.length;
    } else {
        pokemonPreviousCardSearchIndex--;
        pokemonNumber = allPokemonsFound[pokemonPreviousCardSearchIndex];
    }
    showDialogContent(searchPokemonDialog(pokemonNumber));
}

/**
 * Switches to the next Pokemon in the stats view.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @param {number} index Mode flag for normal view or search view.
 * @returns {void}
 */
function nextCardStatsDialog(pokemonNumber, index) {
    if (index == 1) {
        nextCardStatsSart(pokemonNumber);
    } else {
        nextCardStatsSearch(pokemonNumber);
    }
}

/**
 * Shows the stats of the next Pokemon in normal browsing mode.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function nextCardStatsSart(pokemonNumber) {
    if (pokemonNumber >= pokemonsDetail.length - 1) {
        pokemonNumber = 0;
    } else {
        pokemonNumber++;
    }
    showDialogContent(statsDialog(pokemonNumber));
}

/**
 * Shows the stats of the next Pokemon within the search results.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function nextCardStatsSearch(pokemonNumber) {
    let pokemonNextCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);

    if (pokemonNextCardSearchIndex + 1 >= allPokemonsFound.length) {
        pokemonNumber = allPokemonsFound[0];
        pokemonNextCardSearchIndex = 0;
    } else {
        pokemonNextCardSearchIndex++;
        pokemonNumber = allPokemonsFound[pokemonNextCardSearchIndex];
    }
    showDialogContent(searchStatsDialog(pokemonNumber));
}

/**
 * Switches to the previous Pokemon in the stats view.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @param {number} index Mode flag for normal view or search view.
 * @returns {void}
 */
function previousCardStatsDialog(pokemonNumber, index) {
    if (index == 1) {
        previousCardStatsSart(pokemonNumber);
    } else {
        previousCardStatsSearch(pokemonNumber);
    }
}

/**
 * Shows the stats of the previous Pokemon in normal browsing mode.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function previousCardStatsSart(pokemonNumber) {
    if (pokemonNumber == 0) {
        pokemonNumber = pokemonsDetail.length - 1;
    } else {
        pokemonNumber--;
    }
    showDialogContent(statsDialog(pokemonNumber));
}

/**
 * Shows the stats of the previous Pokemon within the search results.
 *
 * @param {number} pokemonNumber Current Pokemon index.
 * @returns {void}
 */
function previousCardStatsSearch(pokemonNumber) {
    let pokemonPreviousCardSearchIndex = allPokemonsFound.indexOf(pokemonNumber);
    if (pokemonPreviousCardSearchIndex <= 0) {
        pokemonNumber = allPokemonsFound[allPokemonsFound.length - 1];
        pokemonPreviousCardSearchIndex = allPokemonsFound.length;
    } else {
        pokemonPreviousCardSearchIndex--;
        pokemonNumber = allPokemonsFound[pokemonPreviousCardSearchIndex];
    }
    showDialogContent(searchStatsDialog(pokemonNumber));
}


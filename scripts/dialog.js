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

function showDialogContent(pokemonNumber) {
    let refcardDetails = document.getElementById('cardDetails');
    refcardDetails.innerHTML = pokemonDialog(pokemonNumber);
    
}
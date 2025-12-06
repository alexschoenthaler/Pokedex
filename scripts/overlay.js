function startLoadingSpinner() {
    document.getElementById('overlay').classList.remove('displayNone');
    document.getElementById('myBody').classList.add('overFlowHidden');
}

function stopLoadingSpinner() {
    document.getElementById('overlay').classList.add('displayNone');
    document.getElementById('myBody').classList.remove('overFlowHidden');
    
}
/** Starts the loading spinner and blocks user interaction */
function startLoadingSpinner() {
    document.getElementById('overlay').classList.remove('displayNone');
    document.getElementById('myBody').classList.add('overFlowHidden');
}

/** Stops the loading spinner and enables user interaction again */
function stopLoadingSpinner() {
    document.getElementById('overlay').classList.add('displayNone');
    document.getElementById('myBody').classList.remove('overFlowHidden');

}
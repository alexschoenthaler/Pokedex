/**
 * Shows the loading spinner and disables scrolling while data is loading.
 *
 * @returns {void}
 */
function startLoadingSpinner() {
    document.getElementById('overlay').classList.remove('displayNone');
    document.getElementById('myBody').classList.add('overFlowHidden');
}

/**
 * Hides the loading spinner and re-enables user interaction.
 *
 * @returns {void}
 */
function stopLoadingSpinner() {
    document.getElementById('overlay').classList.add('displayNone');
    document.getElementById('myBody').classList.remove('overFlowHidden');

}
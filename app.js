// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let changeCounter = {
    head: 0,
    middle: 0,
    bottom: 0
};
// set state for all of the character's catchphrases
let catchPhrases = [];

headDropdown.addEventListener('change', () => {
    headEl.textContent = '';
    // get the value of the head dropdown
    const head = headDropdown.value;
    // increment the head change count state
    changeCounter.head++;
    // update the dom for the head
    let img = document.createElement('img');
    img.src = `./assets/${head}-head.png`;
    headEl.append(img);
    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    middleEl.textContent = '';
    // get the value of the middle dropdown
    const middle = middleDropdown.value;
    // increment the middle change count state
    changeCounter.middle++;
    // update the dom for the middle
    let img = document.createElement('img');
    img.src = `./assets/${middle}-middle.png`;
    middleEl.append(img);
    // update the stats to show the new count
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    bottomEl.textContent = '';
    // get the value of the bottom dropdown
    const bottom = bottomDropdown.value;
    // increment the bottom change count state
    changeCounter.bottom++;
    // update the dom for the bottom
    let img = document.createElement('img');
    img.src = `./assets/${bottom}-pants.png`;
    bottomEl.append(img);
    // update the stats to show the new count
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let phrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchPhrases.push(phrase);
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();

});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(changeCounter.head, changeCounter.middle, changeCounter.bottom); // call this function with the correct arguments
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    for (let arrPhrase of catchPhrases) {
        const p = document.createElement('p');
        p.textContent = arrPhrase;
        catchphrasesEl.append(p);
    }
}

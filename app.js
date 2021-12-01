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
const dropDowns = document.querySelectorAll('select');

// set state for how many times the user changes the head, middle, and bottom
let changeCounter = {
    head: 0,
    middle: 0,
    bottom: 0
};
// set state for all of the character's catchphrases
let catchPhrases = [];

for (const dropDown of dropDowns) {
    dropDown.addEventListener('change', (event) => {
        let part = event.target.dataset.part;
        let choice = event.target.value;
        if (part === 'head') {
            headEl.textContent = '';
        } else if (part === 'middle') {
            middleEl.textContent = '';
        } else if (part === 'bottom') {
            bottomEl.textContent = '';
        }
        changeCounter[part]++;
        let img = document.createElement('img');
        if (part === 'bottom') {
            part = 'pants';
        }
        img.src = `./assets/${choice}-${part}.png`;
        if (part === 'head') {
            headEl.append(img);
        } else if (part === 'middle') {
            middleEl.append(img);
        } else if (part === 'pants') {
            bottomEl.append(img);
        }

        displayStats();
    });
}

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

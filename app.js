// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const dropDowns = document.querySelectorAll('select');

let changeCounter = {
    head: 0,
    middle: 0,
    bottom: 0
};

let catchPhrases = [];

for (const dropDown of dropDowns) {
    dropDown.addEventListener('change', (event) => {
        let part = event.target.dataset.part;
        let choice = event.target.value;

        let partToCode = convertToCode(part)();
        partToCode.textContent = '';

        changeCounter[part]++;

        let img = document.createElement('img');

        if (part === 'bottom') {
            part = 'pants';
        }
        img.src = `./assets/${choice}-${part}.png`;

        if (part === 'pants') {
            part = 'bottom';
        }
        partToCode = convertToCode(part)();
        partToCode.append(img);
        displayStats();
    });
}

function convertToCode(body) {
    let result = new Function(`return ${body};`);
    return result;
}

catchphraseButton.addEventListener('click', () => {
    let phrase = catchphraseInput.value;

    catchPhrases.push(phrase);

    catchphraseInput.value = '';

    displayCatchphrases();

});

function displayStats() {

    const statsString = makeStatsString(changeCounter.head, changeCounter.middle, changeCounter.bottom); //
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let arrPhrase of catchPhrases) {
        const p = document.createElement('p');
        p.textContent = arrPhrase;
        catchphrasesEl.append(p);
    }
}

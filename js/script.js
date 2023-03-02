// HTML, CSS & JavaScript Projects

const container = document.querySelector('.container');

const fruits = ['apples', 'pears', 'oranges', 'grapefruits', 'mandarins', 'limes', 'nectarines', 'apricots', 'peaches', 'plums', 'bananas', 'mangoes', 'strawberries', 'blueberries',]
let fruitsIndex = 0;
let characterIndex = 0;

function fruitsUpdate() {
    characterIndex++;
    container.innerHTML = `<h1>I Like ${fruits[fruitsIndex].slice(0, characterIndex)}</h1>`;
    if (characterIndex === fruits[fruitsIndex].length) {
        fruitsIndex++
        characterIndex = 0
    }
    if (fruitsIndex === fruits.length) {
        fruitsIndex = 0;
    }
    setTimeout(fruitsUpdate, 100);
}

fruitsUpdate()
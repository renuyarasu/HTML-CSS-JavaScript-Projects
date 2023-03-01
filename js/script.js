// HTML, CSS & JavaScript Projects

const counter = document.querySelector('.counter');

const bar_front = document.querySelector('.loading-bar-front');

let idx = 0;


function updateNumber() {
    counter.innerHTML = idx + '%';
    bar_front.style.width = idx + '%';
    idx++;
    
    if (idx < 101) {
        setTimeout(updateNumber, 100)
    }
    
}
updateNumber();
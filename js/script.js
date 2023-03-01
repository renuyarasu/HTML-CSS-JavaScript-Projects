// HTML, CSS & JavaScript Projects

const container = document.querySelector('.container');

window.addEventListener('mouseover', (e) => {
    container.innerHTML = `
   
        <div class="mouse-event">            
            <h1>${e.clientX}</h1>
            <h4>Mouse X Position (px)</h4>
        </div>
         <div class="mouse-event">
            <h1>${e.clientY}</h1>
            <h4>Mouse Y Position (px)</h4>
        </div>


    `
})
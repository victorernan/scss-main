const pics = document.querySelector('.gridPics');

eventosListener();

function eventosListener() {
    document.addEventListener('DOMContentLoaded', () => {
        jsonFile();
    });
}

function jsonFile () {
    fetch('js/fotos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        mostrarfotos(data);
    })
    .catch(function () {
        this.dataError = true;
    })
}

function mostrarfotos(x) {

    x.forEach(element => {
       
        const div = document.createElement('div');
        div.classList.add('grid-item');

        const imagen = document.createElement('img');
        imagen.setAttribute("src", element.name);
        imagen.setAttribute("alt", element.desc);
        imagen.setAttribute("width", '90%');
    

        div.appendChild(imagen);
        pics.appendChild(div);

    });  
}


function sortImagenes(x) {
    x = x.sort(() => Math.random() - 0.5);
}
eventosListener();

function eventosListener() {
    document.addEventListener('DOMContentLoaded', () => {
       jsonFile();
    });
}

function jsonFile () { 
         fetch('js/fotos.json')
            .then(response => {
                return response.json();
            })  
            .then(data => {
                return showPics(data);
            }
            )
            .catch(function () {
                this.dataError = true;
        })
}

function showPics({data}) {    

    sortImagenes(data);

    data.forEach(element => {
 
        const {name, desc} = element;

        const imagen = document.createElement('img');

        imagen.setAttribute('src', name) ;
        imagen.setAttribute("alt", desc);
        imagen.setAttribute("width", '50%');

        document.querySelector('.foto').appendChild(imagen);

    });  
}

function sortImagenes(x) {
    x = x.sort(() => Math.random() - 0.5);
}
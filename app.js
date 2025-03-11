// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
let reiniciar = document.getElementById('reiniciar');



function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    if (amigos.includes(nombreAmigo)) {
        alert('No puedes repetir el nombre, usa el segundo nombre de tu amigo.');
        amigos.pop(nombreAmigo);
    }
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigo);
    }       
    actualizarListaDeAmigos();
    limpiarCaja();
    return;    
}  

function actualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = '';
    for (var i = 1; i <= amigos.length; i++) {
        let nombreAgregado = document.createElement('li');
        nombreAgregado.textContent = ` ${amigos[i - 1]}`;
        listaDeAmigos.appendChild(nombreAgregado);
    }
}

function sortearAmigo() {

    if (amigos.length >= 2) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado.innerHTML = `Su amigo secreto sorteado es: ${amigos[amigoAleatorio]}.`;
    } else {
        alert('Debe añadir al menos dos nombres.');
    } 

}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function nuevaLista() {
    if (amigos.length !='') {
    location.reload();
    amigos.splice(0,amigos.length);
    } else {
        alert('La lista se encuentra vacía.');
    }
    
}
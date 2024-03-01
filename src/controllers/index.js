import { ReproductorDeMusica } from "../classes/Spotify.mjs";
import { doblelista } from "./dependecies.js";

const reproductor = new ReproductorDeMusica(doblelista);


const cancionActualElement = document.getElementById("cancionActual");


function actualizarCancionActual() {
    if (reproductor.currentNode) {
        cancionActualElement.textContent = "Canción actual: " + reproductor.currentNode.getData();
    } else {
        cancionActualElement.textContent = "Ninguna canción en reproducción";
    }
}


document.getElementById("playButton").addEventListener("click", function() {
    reproductor.reproducir();
    actualizarCancionActual(); 
});

document.getElementById("pauseButton").addEventListener("click", function() {
    reproductor.pausar();
    actualizarCancionActual(); 
});

document.getElementById("siguiente").addEventListener("click", function() {
    reproductor.siguiente();
    actualizarCancionActual(); 
});

document.getElementById("anterior").addEventListener("click", function() {
    reproductor.anterior();
    actualizarCancionActual(); 
});

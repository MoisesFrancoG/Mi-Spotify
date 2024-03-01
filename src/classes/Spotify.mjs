export class ReproductorDeMusica {
    constructor(listaDobleEnlazada) {
        this.listaDobleEnlazada = listaDobleEnlazada;
        this.currentNode = null;
        this.audioElement = document.getElementById("reproductor");
        this.cancion = new Audio();
        this.audioElement.appendChild(this.cancion);
        this.playing = false;

        
        this.cancion.addEventListener('ended', () => {
            this.siguiente(); 
        });
    }

    reproducir() {
        if (this.listaDobleEnlazada.getSize() > 0) {
            if (!this.playing) {
                if (this.currentNode) {
                    this.cancion.play();
                    this.playing = true;
                } else {
                    this.currentNode = this.listaDobleEnlazada.getElementAt(0);
                    this.cancion.src = this.currentNode.getData();
                    this.cancion.play();
                    this.playing = true;
                }
            }
        }
    }

    pausar() {
        if (this.playing) {
            this.cancion.pause();
            this.playing = false;
        }
    }

    siguiente() {
        if (this.currentNode && this.currentNode.next) {
            this.currentNode = this.currentNode.next;
            this.cancion.src = this.currentNode.getData();
            if (this.playing) {
                this.cancion.play();
            }
        }
    }

    anterior() {
        if (this.currentNode && this.currentNode.prev) {
            this.currentNode = this.currentNode.prev;
            this.cancion.src = this.currentNode.getData();
            if (this.playing) {
                this.cancion.play();
            }
        } else if (this.currentNode && !this.currentNode.prev) {
            let lastNode = this.listaDobleEnlazada.getElementAt(this.listaDobleEnlazada.getSize() - 1);
            this.currentNode = lastNode;
            this.cancion.src = this.currentNode.getData();
            if (this.playing) {
                this.cancion.play();
            }
        }
    }
}


var barra;
var bola;
var listaBolas = [];
var vidas = 3;
var fase = false;
var start = false;
var pontuacao = 0;
var pause = false;
function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    barra = new Barra();
}

function draw() {
    background(255);
    noFill();
    rect(0, 0, width, height);

    this.pausar();
    barra.vizualizar();
    barra.movimentar();
    if (start) {
        renderizarBola();
    } else {
        textSize(32);
        textAlign(CENTER);
        fill(255, 0, 0);
        text('APERTE ENTER PARA COMEÇAR', width / 2, height / 2);
    }
    if (vidas == 0) {
        textAlign(CENTER);
        fill(255, 0, 0);
        text('GAME OVER APERTE ENTER PARA JOGAR NOVAMENTE', width / 2, height / 2);
        text('Sua pontuação foi: ' + pontuacao, width / 2, height / 4);
        listaBolas = [];
    } else {
        ;
        if (start) {
            textSize(32);
            fill(0);
            text('Vidas: ' + vidas, width / 8 * 7, height / 8);
            text('Pontuação: ' + pontuacao, width / 8, height / 8);
        }
    }

}
function renderizarBola() {
    listaBolas.forEach((bola) => {
        bola.vizualizar();
        bola.movimentar();
        if (bola.colisao(barra)) {
            bola.tipo == 3 ? curar() : vidas--;
        }
        if (bola.limites()) {
            bola.reset();
            fase = true;
            pontuacao++;
        }
    });
    if (fase) {
        if (listaBolas.length < 30) {
            listaBolas.push(new Bola());
        }
        fase = false;
    }

}
function curar() {
    if (vidas < 3) {
        vidas++;
    }
    barra.tonta = false;
    barra.raiva = false;
}
function keyPressed() {
    console.log(key)
    if (key === 'ArrowRight') {
        barra.esquerda = true;
    } else if (key === 'ArrowLeft') {
        barra.direita = true;
    } else if (key === 'Enter') {
        loop();
        start = true;
        pontuacao = 0;
        listaBolas = [];
        listaBolas.push(new Bola());
        vidas = 3;
        this.curar();
        barra.raiva = false;
    } else if (key === ' ' && start == true) {
        pause = !pause;
        pause == true ? noLoop() : loop();
    }
}
function keyReleased() {
    barra.esquerda = false;
    barra.direita = false;
}
function pausar() {
    if (pause) {
        fill(0);
        rect(width / 2 - 20, height / 2, 20, 40);
        rect(width / 2 + 20, height / 2, 20, 40)

    }
}


var barra;
var bola;
var listaBolas = [];
var vidas = 3;
var fase = false;
var start = false;
var pontuacao = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    barra = new Barra();
}

function draw() {
    background(255);


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
        if (listaBolas.length < 12) {
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
    if (key === 'd') {
        barra.esquerda = true;
    } else if (key === 'a') {
        barra.direita = true;
    } else if (key === 'Enter') {
        start = true;
        pontuacao = 0;
        listaBolas = [];
        listaBolas.push(new Bola());
        vidas = 3;
        this.curar();
        barra.raiva = false;
    }
}
function keyReleased() {
    barra.esquerda = false;
    barra.direita = false;
}

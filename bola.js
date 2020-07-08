function Bola() {
    this.tipo = 1;
    this.posicao = createVector(width, height / 8);
    this.posicao.x = random(0, this.posicao.x);
    this.velocidade = createVector(1, 1).mult(random(6, 12));
    this.direcao = createVector(0, 1);
    this.vizualizar = function () {
        this.fabricarBolinha();
    }
    this.movimentar = function () {
        this.posicao.x += this.velocidade.x * this.direcao.x;
        this.posicao.y += this.velocidade.y * this.direcao.y;

    }
    this.reset = function () {
        this.posicao.y = 0;
        this.posicao.x = random(0, width);
        this.velocidade = createVector(1, 1).mult(random(4, 12));


    }
    this.limites = function () {
        if (this.posicao.y > height) {
            return true;
        }
    }

    this.colisao = function (barra) {
        if (barra.posicao.y <= this.posicao.y &&
            barra.posicao.x < this.posicao.x &&
            barra.posicao.x + barra.altura > this.posicao.x) {
            this.regraColisao(barra);
            barra.raiva = true;
            this.reset();
            return true;
        }
        return false;
    }

    this.fabricarBolinha = function () {
        if (this.velocidade.y > 8) {
            this.tipo = 1;
            fill(255, 0, 0);
        }
        else if (this.velocidade.y > 6) {
            this.tipo = 2;
            fill(255, 255, 0);
        }
        else {
            this.tipo = 3;
            fill(127, 255, 0);
        }
        ellipse(this.posicao.x, this.posicao.y, 20);
    }

    this.regraColisao = function (barra) {
        if (this.tipo == 1) {

        } else if (this.tipo == 2) {
            barra.tonta = true;
        }

    }

}
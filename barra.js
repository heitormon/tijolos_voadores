function Barra() {
    this.altura = 160;
    this.largura = 40;

    this.esquerda = false;
    this.direita = false;
    this.tonta = false;
    this.raiva = false;

    this.posicao = createVector(width / 2, height - 40);

    this.vizualizar = function () {
        if (this.tonta) {
            fill(255,0,255);
        }else{
            fill(255, 102, 0);
        }
        rect(this.posicao.x, this.posicao.y, this.altura, this.largura);
        this.face();
    }
    this.mover = function (movimento) {
        this.posicao.x += movimento;
    }
    this.face = function () {
        if (this.raiva) {
            fill(0);
            arc(this.posicao.x + this.altura / 4, this.posicao.y + 20, 10, 10, 0, PI + QUARTER_PI, CHORD);
            arc(this.posicao.x + this.altura / 4 * 3, this.posicao.y + 20, 10, 10, -1, PI, CHORD);
            line(this.posicao.x + this.altura / 2 - 10, this.posicao.y + 20,
                this.posicao.x + this.altura / 2 + 10, this.posicao.y + 20);
        }
        else {
            fill(0);
            ellipse(this.posicao.x + this.altura / 4, this.posicao.y + 20, 10);
            ellipse(this.posicao.x + this.altura / 4 * 3, this.posicao.y + 20, 10);
            arc(this.posicao.x + this.altura / 2, this.posicao.y + 20, 10, 10, 0, PI);
        }
    }

    this.movimentar = function () {
        let velocidade = 10;
        this.tonta == true ? velocidade *= -1 : velocidade;
        if (this.esquerda) {
            this.mover(velocidade);
        }
        else if (this.direita) {
            this.mover(-velocidade);
        }
        this.barreiras();
    }

    this.barreiras = function () {
        if (this.posicao.x < 0) this.posicao.x = 0;
        else if (this.posicao.x + this.altura > width) this.posicao.x = width - this.altura;
    }

}
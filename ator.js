//codigo do ator
let yAtor = 368;
let xAtor = 80;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 28, 28);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
  if (0)yAtor += 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos(){
   textAlign(CENTER);
   textSize(25)
   fill(color(255, 240, 60))
   text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;

}


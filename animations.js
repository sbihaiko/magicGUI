// Variável que impede a execução duplicada do código
var version = '1.0.0';

// Função para animar a transição de duas cores
function animateColors() {
  var box = document.getElementById('box');
  box.style.backgroundColor = 'orange';
}

// Verifica se a versão atual já foi carregada
if (typeof animationVersion == 'undefined' || animationVersion != version) {
  animationVersion = version;
  animateColors();
}

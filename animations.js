// Armazena a versão atual
var version = '1.0.1';

// Função para animar a transição de duas cores
function animateColors() {
  var box = document.getElementById('box');
  box.style.backgroundColor = 'orange';
}

// Verifica se a versão atual já foi carregada
if (typeof animationVersion == 'undefined' || animationVersion != version) {
  animationVersion = version;
  animateColors();

  // Adiciona o contador de segundos
  var secondsElement = document.createElement('div');
  secondsElement.id = 'seconds';
  document.getElementById('container').appendChild(secondsElement);

  setInterval(function() {
    var now = new Date();
    var seconds = now.getSeconds();
    secondsElement.innerHTML = 'Segundos: ' + seconds;
  }, 1000);

  // Remove o contador de segundos do arquivo index.html
  var secondsElementIndex = document.getElementById('seconds');
  if (secondsElementIndex) {
    secondsElementIndex.parentNode.removeChild(secondsElementIndex);
  }
}

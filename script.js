document.addEventListener('DOMContentLoaded', function () {
let tamanhoAtualFonte = 1 ;

const aumentaFonteBotao = document.getElementById('aumenta-fonte');
})

aumentaFonteBotao.addEventListener('click', function () {
tamanhoAtualFonte += 0.1;
Document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})

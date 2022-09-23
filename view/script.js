let TituloCard = document.querySelectorAll('.TitleCard');

/*Abrir Modal*/
var BotaoenviarFormulario = document.querySelector('#enviar-button')
function enviarform() {
  var modal = document.querySelector('.ConteinerModal')
  modal.classList.add('open')
}

/*Escolher Forma de pagamento*/
/*Pix*/
function Pix() {
  /*Abre a Aba*/
  var boletonum = document.querySelector('.Boletonum')
  if (boletonum.classList.value = "Boletonum open") {
    boletonum.classList.remove('open')
  }
  var pixnum = document.querySelector('.pixnum')
  pixnum.classList.toggle('open')
  /*Tira o fundo do outro*/
  var imagemBoleto = document.querySelector('.imageBoleto')
  imagemBoleto.classList.remove('selected')
  /*Muda O Fundo*/
  var imagempix = document.querySelector('.imagePix')
  imagempix.classList.toggle('selected')
}


/*Boleto*/
function Boleto() {
  var pixnum = document.querySelector('.pixnum')
  if (pixnum.classList.value = "pixnum open") {
    pixnum.classList.remove('open')
  }
  var boletonum = document.querySelector('.Boletonum')
  boletonum.classList.toggle('open')
  /*Tira  fundo do outro*/
  var imagempix = document.querySelector('.imagePix')
  imagempix.classList.remove('selected')
  /*Muda O Fundo*/
  var imagemBoleto = document.querySelector('.imageBoleto')
  imagemBoleto.classList.toggle('selected')
}

/*Close Modal*/
function FecharModal() {
  var ConteinerModal = document.querySelector('.ConteinerModal')
  ConteinerModal.classList.remove('open')
}
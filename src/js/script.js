//Menu
function menu () {
  const links = document.querySelectorAll(".header-menu a");
  links.forEach((link) => {
    if (location.href.includes(link.href)) {
      link.classList.add("ativo");
    }
});
}
menu();


// Perguntas Frequentes
function perguntasFrequentes(){

  const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

}

perguntasFrequentes();

//Animação
if(window.SimpleAnime){
  new SimpleAnime()
}




function Portfolio (){
  let contador = 1
  document.getElementById("radio1").checked = true;

  setInterval(function(){
    passarImagem();
  },2500)
  function passarImagem(){
    contador++;
    if(contador>3){
      contador = 1;
    }
    document.getElementById("radio"+contador).checked = true;
  }
}

Portfolio();




function obterFraseAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * frases_do_dia.length);
  return frases_do_dia[indiceAleatorio];
}


function exibirFraseAleatoria() {
  const nomeCompleto = document
    .getElementById("nomeCompleto")
    .value.trim()
    .toUpperCase(); 
  const resultado = document.getElementById("resultado");

  if (nomeCompleto.length >= 5) {
    const frase = obterFraseAleatoria();
    resultado.innerHTML = `<span style='color: #4C4A59; font-size: 1.8rem; background-color: #F2CDAC; border-radius: 1.5rem; padding: 0.5rem;'>Olá, ${nomeCompleto}!: ${frase}</span>`;
  } else {
    resultado.innerHTML =
      "<p style='color: #ffffff; font-size: 1rem; background-color: red'>Por favor, digite um nome com pelo menos 5 caracteres.</p>";
  }
}


const botao = document.getElementById("gerarMensagens");
botao.addEventListener("click", exibirFraseAleatoria);


const resultado = document.createElement("div");
resultado.id = "resultado";
document.body.appendChild(resultado);


function limparResultado() {
  resultado.innerHTML = "";
  document.getElementById("nomeCompleto").value = "";
}


const botaoVoltar = document.getElementById("voltar");
botaoVoltar.addEventListener("click", limparResultado);

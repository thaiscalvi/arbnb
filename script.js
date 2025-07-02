import { hospedagens } from "./hospedagem.js";

const resultado = document.getElementById("resultado");
const filtroQuarto = document.getElementById("btn-filtro-quarto");
const filtroCasa = document.getElementById("btn-filtro-casa");
const filtroApartamento = document.getElementById("btn-filtro-apartamento");
const FiltroLimpar = document.getElementById("btn-filtro-limpar");



function btnFiltrar(categoria) {
  resultado.innerHTML = "";
  FiltroLimpar.innerHTML = `<button class="btn-filtro" data-categoria="limpar">Limpar</button>`;
  const filtrarCategoria = hospedagens.filter(element => element.categoria === categoria)
  creatHospedagens(filtrarCategoria)
}

function creatHospedagens(array) {
  array.forEach((element) => {
    resultado.innerHTML += `
      <div class="card">
        <img class="thumbhospedagem" src="${element.thumb}" alt="">
        <h2 class="nomehospedagem">${element.nome}</h2>
        <p class="descricaohospedagem">${element.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</p>  
        <p class="descricaohospedagem">${element.cidade} - ${element.estado}</p>
      </div>
    `;
  });
}

filtroQuarto.addEventListener("click", () => btnFiltrar("Quarto"))
filtroCasa.addEventListener("click", () => btnFiltrar("Casa"))
filtroApartamento.addEventListener("click", () => btnFiltrar("Apartamento"))

FiltroLimpar.addEventListener("click", function () {
  resultado.innerHTML = ""; // limpa os cards

  // mostra todas as hospedagens de novo
  creatHospedagens(hospedagens)

  FiltroLimpar.innerHTML = ""; // esconde o botão "limpar"
});

window.addEventListener("load", () => {
  creatHospedagens(hospedagens)
});


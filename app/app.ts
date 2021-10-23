import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    controller.adiciona();
    controller.limparFormulario();
  });
} else {
  throw Error('Não foi possivel inicializar a aplicação. Verifique se o form existe.');
}

const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
  botaoImporta.addEventListener("click", () => {
    controller.importaDados();
  });
} else {
  throw Error("Botão importa não encontrado");
}
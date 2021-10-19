import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private el: HTMLElement;

  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista().map(negociacao => `
          <tr>
            <td>?</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    `;
  }

  update(model: Negociacoes): void {
    const template = this.template(model);
    this.el.innerHTML = template;
  }
}
export class NegociacoesView {
  private el: HTMLElement;

  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }

  template(): string {
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
      </tbody>
    </table>
    `;
  }

  update(): void {
    this.el.innerHTML = this.template();
  }
}
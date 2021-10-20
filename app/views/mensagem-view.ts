export class MensagemView {
  private el: HTMLElement;

  constructor(seletor: string) {
    this.el = document.querySelector(seletor);
  }

  template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `
  }

  update(model: string): void {
    const template = this.template(model);
    this.el.innerHTML = template;
  }
}
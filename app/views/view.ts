export class View<T> {
  protected el: HTMLElement;

  constructor(seletor: string) {
    this.el = document.querySelector(seletor);
  }

  template(model: T): string {
    throw Error('Classe filha precisa implementar o metodo template')
  }

  update(model: T): void {
    const template = this.template(model);
    this.el.innerHTML = template;
  }
}
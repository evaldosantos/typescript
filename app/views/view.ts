export class View {
  protected el: HTMLElement;

  constructor(seletor: string) {
    this.el = document.querySelector(seletor);
  }
}
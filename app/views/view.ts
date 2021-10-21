import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  protected el: HTMLElement;
  private escapar: boolean = false;

  constructor(seletor: string, escapar?: boolean) {
    const element = document.querySelector(seletor);
    if (element) {
      this.el = element as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`)
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  @logarTempoDeExecucao()
  public update(model: T): void {
    let template = this.template(model);
    if(this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    this.el.innerHTML = template;
  }
}
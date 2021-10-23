import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
  protected el: HTMLElement;

  constructor(seletor: string) {
    const element = document.querySelector(seletor);
    if (element) {
      this.el = element as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`)
    }
  }

  protected abstract template(model: T): string;

  @inspect()
  @logarTempoDeExecucao(true)
  public update(model: T): void {
    let template = this.template(model);
    
    this.el.innerHTML = template;
  }
}
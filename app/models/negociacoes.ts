import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  eIgual(obj: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(obj);
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
}
import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView("#mensagemView");
  
  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  /**
   * this is a comment
   */
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    
    if(!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView
          .update("Apenas negociaçoes em dias úteis são aceitas");
          return;
    }
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private ehDiaUtil(date: Date): boolean {
    return date.getDay() > DiasDaSemana.DOMINGO && 
           date.getDay() < DiasDaSemana.SABADO;
  }

  // private criaNegociacao(): Negociacao {
  //   const exp = /-/g;
  //   const date = new Date(this.inputData.value.replace(exp, ','));
  //   const quantidade = parseInt(this.inputQuantidade.value, 10);
  //   const valor = parseFloat(this.inputValor.value);

  //   return new Negociacao(
  //     date, 
  //     quantidade,
  //     valor
  //   );
  // }

  public limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociacao adicionada com sucesso");
  }
}
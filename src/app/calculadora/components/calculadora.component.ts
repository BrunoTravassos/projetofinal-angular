import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1!: string;
  private numero2!: string;
  private resultado!: string;
  private operacao!: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }
  /**
   * incicializando todos os op para valor padrao.
   * @return void - retorna algo vazio/neutro
   */

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = 'null';
    this.resultado = 'null';
    this.operacao = 'null';
  }
  /**
   *Retorna o valor concatenado e trata o separador decimal
   *
   * @param numAtual string
   * @param numConcat string
   * @return string
   */

  concatenaNumero(numAtual: string, numConcat: string): string {
    if (numAtual == '0' || numAtual == 'null') {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > 1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }
  /**
   *Adiciona o numero selecionado para o calculo, com um
   * retorno do tipo void
   * @param numero string
   */

  adicionaNumero(numero: string): void {
    if (this.operacao == 'null') {
      this.numero1 = this.concatenaNumero(this.numero1, numero)
    } else {
      this.numero2 = this.concatenaNumero(this.numero2, numero)
    }
  }

  definirOperacao(operacao: string): void{
    /**
     * define a operacao caso nao exista
     */
    if (this.operacao == 'null') {
      this.operacao = operacao;
      return;
    }
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
      ).toString();

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = 'null';
      this.resultado = 'null';
    }

  }

  /**
   * Efetua o calculo de um operacao
   * @returns void
   */
  calcular(): void{
    if (this.numero2 == 'null') {
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    ).toString();
    this.numero1 = this.resultado;
    this.operacao = 'null';
    this.numero2 = 'null';
  }

  get display():string {
    if (this.resultado != 'null') {
      return this.resultado.toString();
    }
    if (this.numero2 != 'null') {
      return this.numero2.toString();
    }

    return this.numero1.toString();
  }

}

/**
*Serviço responsavel por executar as operaçoes da CalculadoraService

*@autor Bruno Travassos<brunodefrontin@gmail.com>
*@since 1,0

*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* definindo as constantes utlizadas
  para identificar as op de calculo */

  static readonly SOMA: string = '+';
  static readonly SUBTARCAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   *Metodo qe calcula uma operação de dois numeros
   *suporta adição, subtração, multiplicação, divisão.

   * @param num1
   * @param num2
   * @param operacao
   * @returns
   */

  calcular(num1: number, num2:number, operacao:string):number {
    let resultado: number;


    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTARCAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}

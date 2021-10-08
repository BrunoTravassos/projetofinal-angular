import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados = [
    ['janeiro', 33],
    ['Fevereiro', 68],
    ['Março',49],
    ['Abril',15],
    ['Maio',80],
    ['Junho',27],
    ['Julho',20],
    ['Agosto',12],
    ['Setembro',65],
    ['Outubro',86],
    ['Novembro',2],
    ['Dezembro',57],
  ]

  constructor() { }

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}

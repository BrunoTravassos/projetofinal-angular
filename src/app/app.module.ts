import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CalculadoraModule } from './calculadora';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { JogoDaVelhaRoutingModule } from './jogo-da-velha/jogo-da-velha-routing.module';
import { ConversorModule } from './conversor';
import { TarefasModule } from './tarefas';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    JogoDaVelhaModule,
    JogoDaVelhaRoutingModule,
    ConversorModule,
    TarefasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

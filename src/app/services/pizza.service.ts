import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizza: Pizza = {
    sabor: '',
    tamanho: '',
    adicionais: [],
    preco: 0.00
  }
  
  constructor() {}
  
  aumentarPreço(valor:number){
    this.pizza.preco += valor;
  }
  diminuirPreço(valor:number){
    this.pizza.preco -= valor;
  }
  setSabor(sabor:string,valor:number){
    this.pizza.sabor = sabor;
    this.aumentarPreço(valor);
  }
  setTamanho(tamanho:string,valor:number){
    this.pizza.tamanho = tamanho;
    this.aumentarPreço(valor);
  }
  addAdicionais(ingredientes: {ingrediente: string, valor: number}[]) {
    ingredientes.forEach(ingredienteObj => {
      this.pizza.adicionais.push(ingredienteObj.ingrediente);
      this.aumentarPreço(ingredienteObj.valor);
    });
  }

  getPizza():Pizza{
    return this.pizza;
  }
}

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
    preço: 0.00
  }
  
  constructor() {}
  
  aumentarPreço(valor:number){
    this.pizza.preço += valor;
  }
  diminuirPreço(valor:number){
    this.pizza.preço -= valor;
  }
  setSabor(sabor:string,valor:number){
    this.pizza.sabor = sabor;
    this.aumentarPreço(valor);
  }

  setTamanho(tamanho:string,valor:number){
    this.pizza.tamanho = tamanho;
    this.aumentarPreço(valor);
  }

  addAdicionais(adicional:string,valor:number){
    this.pizza.adicionais.push(adicional);
    this.aumentarPreço(valor);
  }
  removeAdicionais(adicional:string,valor:number){
    this.pizza.adicionais = this.pizza.adicionais.filter(a => a !== adicional);
    this.diminuirPreço(valor);
  }
}

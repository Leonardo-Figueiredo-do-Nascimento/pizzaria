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
  resetPizza(){
    this.pizza.sabor ='',
    this.pizza.tamanho ='',
    this.pizza.adicionais =[],
    this.pizza.preco = 0.00
  }
  criarPizza(sabor:string,tamanho:string,adicionais:string[],preco:number):Pizza{
    return new Pizza(sabor, tamanho, adicionais, preco);
  }
  getPizza():Pizza{
    return this.pizza;
  }
}

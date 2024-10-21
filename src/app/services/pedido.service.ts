import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private pedido: Pedido = { 
    endereço: '',
    pizzas: [],  
    precoTotal: 0.00 
  };

  constructor() { }

  adicionarPizza(pizza:Pizza,preço:number){
    this.pedido.pizzas.push(pizza)
    this.pedido.precoTotal += preço;
  }
}

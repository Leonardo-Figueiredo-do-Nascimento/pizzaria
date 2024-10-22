import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private pedidoSubject = new BehaviorSubject<Pedido>(this.pedido);

  constructor() { }

  adicionarPizza(pizza: Pizza, preço: number) {
    this.pedido.pizzas.push(pizza);
    this.pedido.precoTotal += preço;
    this.pedidoSubject.next(this.pedido);
  }

  getPedido(): Pedido {
    return this.pedido;
  }

  getPedidoObservable() { 
    return this.pedidoSubject.asObservable();
  }
}
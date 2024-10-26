import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pedido } from '../models/pedido';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private pedido: Pedido = { 
    endereco: '',
    pizzas: [],  
    precoTotal: 0.00 
  };

  private pedidoSubject = new BehaviorSubject<Pedido>(this.pedido);

  constructor() { }

  adicionarPizza(pizza: Pizza) {
    this.pedido.pizzas.push(pizza);
    this.pedido.precoTotal += pizza.preco;
    this.pedidoSubject.next(this.pedido);
  }
  atualizarEndereco(endereco: string) {
    this.pedido.endereco = endereco;
    this.pedidoSubject.next(this.pedido); 
  }
  atualizarPedido(pedido: any) {
    this.pedidoSubject.next(pedido);
  }
  getPedido(): Pedido {
    return this.pedido;
  }

  getPedidoObservable() { 
    return this.pedidoSubject.asObservable();
  }
}
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pedido: Pedido | undefined; 
  pizzaIcon = "./assets/pizza-icon.png";
  deliveryIcon = "./assets/delivery-icon.png";
  pedidoCount: number = 0;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getPedidoObservable().subscribe(pedido => {
      this.pedido = pedido; 
      this.updatePedidoCount(); 
    });
  }

  updatePedidoCount(): void {
    this.pedidoCount = this.pedido?.pizzas ? this.pedido.pizzas.length : 0; 
  }
}
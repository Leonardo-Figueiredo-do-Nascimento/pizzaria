import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    pizzaIcon = "./assets/pizza-icon.png";
    deliveryIcon = "./assets/delivery-icon.png";

    pedidoCount: number = 0;

    addPedido(): void{
      this.pedidoCount++;
    }
}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,RouterModule],
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

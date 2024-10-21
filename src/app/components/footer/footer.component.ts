import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  pedido: Pedido;

  constructor(private pedidoService: PedidoService) {

    this.pedido = this.pedidoService['pedido']; 

  }
}

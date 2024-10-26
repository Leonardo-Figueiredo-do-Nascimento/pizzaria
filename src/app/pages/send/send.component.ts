import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {

  pedido: any;
  
  constructor(
    private pedidoService: PedidoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.pedido = this.pedidoService.getPedido();
    console.log(this.pedido)
  }
  enviarPedido(){
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}

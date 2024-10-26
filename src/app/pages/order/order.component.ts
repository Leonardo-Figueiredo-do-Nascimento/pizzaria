import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,NgIf],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  
  novoEndereco: string = '';
  
  pedido: any;
  
  constructor(
    private pedidoService: PedidoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.pedido = this.pedidoService.getPedido();
    console.log(this.pedido)
  }

  deletarPizza(index: number) {
    if (confirm("Deseja deletar a pizza do seu pedido?")) {
      const pizzaRemovida = this.pedido.pizzas.splice(index, 1)[0];
      this.pedido.precoTotal -= pizzaRemovida.preco;
      this.pedidoService.atualizarPedido(this.pedido);
    }
  }
  
  finalizarPedido(){
    if(this.novoEndereco != ''){
      this.pedidoService.atualizarEndereco(this.novoEndereco);
      if(confirm("Quer mesmo finalizar o pedido?")){
        this.router.navigate(['./envio'])
      };
    } else{
      alert("Preencha o seu endereço!");
    }
  }
}

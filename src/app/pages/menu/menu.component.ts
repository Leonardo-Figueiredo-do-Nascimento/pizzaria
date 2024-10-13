import { Component } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { SizeComponent } from '../size/size.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SizeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  pizzas: any;

  selectedPizza: string | null = null;

  onPizzaSelect(sabor: string): void {
    this.selectedPizza = sabor;
  }

  constructor(private service: PizzaService){
    this.service.getPizzaMenu().subscribe(data=>{
      this.pizzas = data;
      console.log(this.pizzas)
    })
  }
}

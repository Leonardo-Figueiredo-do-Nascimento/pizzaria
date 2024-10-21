import { Component } from '@angular/core';
import { PizzaJSONService } from '../../services/pizzaJSON.service';
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

  selectedPizza: { sabor: string, valor: number } | null = null;

  onPizzaSelect(sabor: string, valor: number): void {
    this.selectedPizza = {sabor,valor};
  }

  constructor(private service: PizzaJSONService){
    this.service.getPizzaMenu().subscribe(data=>{
      this.pizzas = data;
    })
  }
}

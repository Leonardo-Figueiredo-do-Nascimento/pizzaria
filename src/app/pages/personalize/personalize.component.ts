import { Component } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { PizzaService } from '../../services/pizza.service';
import { MenuComponent } from '../menu/menu.component';
import { SizeComponent } from '../size/size.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-personalize',
  standalone: true,
  imports: [NgClass],
  templateUrl: './personalize.component.html',
  styleUrl: './personalize.component.css'
})
export class PersonalizeComponent {

  constructor(
    private pedidoService: PedidoService, 
    private pizzaService: PizzaService,
    private menuComponent: MenuComponent,
    private sizeComponent: SizeComponent
  ) {}
  
  adicionaisAUX: {ingrediente:string, valor: number}[] = [];

  addIngredient(ingrediente:string, valor:number){
    if(!this.isIngredientAdded(ingrediente)){
      this.adicionaisAUX.push({ingrediente,valor})
    }
  }
  removeIngredient(ingrediente:string){
    if(this.isIngredientAdded(ingrediente)){
      this.adicionaisAUX = this.adicionaisAUX.filter(item => item.ingrediente !== ingrediente);
    }
  }
  isIngredientAdded(ingrediente: string): boolean {
    return this.adicionaisAUX.some(item => item.ingrediente === ingrediente);
  }
  concluirPizza():void{
    if (this.menuComponent.selectedPizza) {
      const { sabor, valor } = this.menuComponent.selectedPizza;
      this.pizzaService.setSabor(sabor, valor);
    }
    if (this.sizeComponent.sizeSelected) {
      const { tamanho, valor } = this.sizeComponent.sizeSelected;
      this.pizzaService.setTamanho(tamanho, valor);
    }

    this.pizzaService.addAdicionais(this.adicionaisAUX);

    const pizza = this.pizzaService.getPizza()

    this.pedidoService.adicionarPizza(pizza,pizza.preco)

    //Vai resetar a pizza
    this.pizzaService.resetPizza();
    this.menuComponent.selectedPizza = null;
    this.sizeComponent.sizeSelected = null;
  }
}

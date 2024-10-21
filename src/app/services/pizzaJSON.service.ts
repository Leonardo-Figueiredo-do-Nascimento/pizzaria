import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaJSONService {

  private pizzaUrl = "./assets/pizzas.json"

  constructor(private client: HttpClient) {}

  getPizzaMenu(): Observable<any>{
    return this.client.get<any>(this.pizzaUrl)
  }
}

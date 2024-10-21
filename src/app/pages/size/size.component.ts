import { Component } from '@angular/core';
import { PersonalizeComponent } from '../personalize/personalize.component';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [PersonalizeComponent],
  templateUrl: './size.component.html',
  styleUrl: './size.component.css'
})
export class SizeComponent {
  sizeSelected: { tamanho: string, valor: number } | null = null;

  onSizeSelect(tamanho: string, valor: number): void {
    this.sizeSelected = { tamanho, valor };
  }
}

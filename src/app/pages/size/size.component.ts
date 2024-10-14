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
  sizeSelected: string | null = null;

  onSizeSelect(tamanho: string): void {
    this.sizeSelected = tamanho;
  }
}

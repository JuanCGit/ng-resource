import { Component, computed, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { IColor, INumber, ITexture } from '../interfaces/select.interfaces';

@Component({
  selector: 'app-root',
  imports: [Select],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-resource';
  numbers: INumber[] = [
    { number: 'One', value: 1 },
    { number: 'Two', value: 2 },
    { number: 'Three', value: 3 },
    { number: 'Four', value: 4 },
  ];
  colors: IColor[] = [
    { color: 'Red', value: 'red' },
    { color: 'Green', value: 'green' },
    { color: 'Blue', value: 'blue' },
    { color: 'Yellow', value: 'yellow' },
  ];
  textures: ITexture[] = [
    { texture: 'Hairy', value: 'hairy' },
    { texture: 'Viscous', value: 'viscous' },
    { texture: 'Hard', value: 'hard' },
    { texture: 'Liquid', value: 'liquid' },
  ];
  selectedNumber = signal<number | undefined>(undefined);
  selectedColor = signal<string | undefined>(undefined);
  selectedTexture = signal<string | undefined>(undefined);
  aiQuery = computed(() => {
    const number = this.selectedNumber();
    const color = this.selectedColor();
    const texture = this.selectedTexture();
    const allSelected = ![number, color, texture].includes(undefined);
    return allSelected
      ? `Make an image of number ${number} with ${texture} texture and ${color} color`
      : undefined;
  });

  onNumberChange(selected: INumber): void {
    this.selectedNumber.set(selected.value);
  }

  onColorChange(selected: IColor): void {
    this.selectedColor.set(selected.value);
  }

  onTextureChange(selected: ITexture): void {
    this.selectedTexture.set(selected.value);
  }
}

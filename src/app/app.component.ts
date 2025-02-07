import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { Select } from 'primeng/select';
import { IColor, INumber, ITexture } from './interfaces/select.interfaces';
import { ImageGenerationService } from './services/image-generation.service';
import { firstValueFrom } from 'rxjs';
import { LoaderComponent } from './components/loader.component';
import { colors, numbers, textures } from './consts/select-options.consts';

@Component({
  selector: 'app-root',
  imports: [Select, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  #imageGenerationService = inject(ImageGenerationService);

  protected readonly colors = colors;
  protected readonly textures = textures;
  protected readonly numbers = numbers;

  selectedNumber = signal<number | undefined>(undefined);
  selectedColor = signal<string | undefined>(undefined);
  selectedTexture = signal<string | undefined>(undefined);

  doYouOweMeCoffee = signal<boolean>(false);

  aiQuery = computed(() => {
    const number = this.selectedNumber();
    const color = this.selectedColor();
    const texture = this.selectedTexture();
    const allSelected = ![number, color, texture].includes(undefined);
    return allSelected
      ? `Make an image of number ${number} with ${texture} texture and ${color} color`
      : undefined;
  });
  imageResource = rxResource({
    request: () => ({ aiQuery: this.aiQuery() }),
    loader: ({ request }) => {
      this.#incrementCallCounter(request.aiQuery);
      return this.#imageGenerationService.generateImage(
        this.doYouOweMeCoffee(),
        request.aiQuery,
      );
    },
  });

  constructor() {
    this.#initializeCallCounter();
  }

  onNumberChange(selected: INumber): void {
    this.selectedNumber.set(selected.value);
  }

  onColorChange(selected: IColor): void {
    this.selectedColor.set(selected.value);
  }

  onTextureChange(selected: ITexture): void {
    this.selectedTexture.set(selected.value);
  }

  #initializeCallCounter(): void {
    const callCount = localStorage.getItem('callCounter');
    const callCountNumber = Number(callCount);
    if (callCount === null || callCountNumber < 5)
      localStorage.setItem('callCounter', String(callCountNumber));
    else this.doYouOweMeCoffee.set(true);
  }

  #incrementCallCounter(aiQuery?: string): void {
    if (!aiQuery) return;
    const callCount = Number(localStorage.getItem('callCounter')) || 0;
    const updatedCount = callCount + 1;
    localStorage.setItem('callCounter', updatedCount.toString());
    if (updatedCount >= 5) this.doYouOweMeCoffee.set(true);
  }
}

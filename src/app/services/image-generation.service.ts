import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { IImageResponse } from '../interfaces/image-response.interface';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageGenerationService {
  #http = inject(HttpClient);
  #apiUrl = environment.openAI.apiUrl;
  #apiKey = environment.openAI.apiKey;
  #model = environment.openAI.model;

  generateImage(
    doYouOweMeCoffee: boolean,
    prompt?: string,
    size: string = '1024x1024',
    n: number = 1,
  ): Observable<string> {
    if (!prompt || doYouOweMeCoffee) return EMPTY;
    const body = {
      model: this.#model,
      prompt,
      n,
      size,
    };
    return this.#http
      .post<IImageResponse>(this.#apiUrl, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.#apiKey}`,
        },
      })
      .pipe(
        catchError((error) => {
          console.log(error);
          return EMPTY;
        }),
        map((resp) => (resp.data.length ? resp.data[0].url : '')),
      );
  }
}

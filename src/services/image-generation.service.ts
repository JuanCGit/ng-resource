import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { IImageResponse } from '../interfaces/image-response.interface';
import { EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageGenerationService {
  private apiUrl = environment.openAI.apiUrl;
  private apiKey = environment.openAI.apiKey;
  private model = environment.openAI.model;

  constructor(private http: HttpClient) { }

  generateImage(
    prompt?: string,
    size: string = '1024x1024',
    n: number = 1
  ): Observable<string[]> {
    if (!prompt) return EMPTY;
    const body = {
      model: this.model,
      prompt,
      n,
      size,
    };
    return this.http.post<IImageResponse>(this.apiUrl, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    }).pipe(map((resp) => resp.data.map((img) => img.url)))
  }
}

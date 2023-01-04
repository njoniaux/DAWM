import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  obtenerData(nombre: string) {
    return this.cumbringer.get('https://api.jikan.moe/v4/anime/' + nombre);
  }

  constructor(private cumbringer: HttpClient) {}
}

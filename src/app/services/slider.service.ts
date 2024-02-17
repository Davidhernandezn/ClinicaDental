import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  constructor() {}

  async executeSliderScript() {
    // Importa el archivo JavaScript
    const module ='../../assets/javascript/slide.js';
    // Ejecuta cualquier función o código necesario del archivo JavaScript
    console.log("fdsfafa")
  }
}
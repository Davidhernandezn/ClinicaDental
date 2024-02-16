import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }
  carga(archivos:String[]){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = "../../assets/javascript/"+archivo+".js";
      let body = document.getElementsByTagName("swiper-element-bundle.min")[0];
      body.appendChild( script );
    }
  }
}

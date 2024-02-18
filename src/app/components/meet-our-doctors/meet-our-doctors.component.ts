import { Component, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';
import { ListaDoctoresService } from 'src/app/services/lista.doctores.service';
import { Doctor } from '../../Entity/doctor.interface';

@Component({
  selector: 'app-meet-our-doctors',
  templateUrl: './meet-our-doctors.component.html',
  styleUrls: ['./meet-our-doctors.component.css']
})
export class MeetOurDoctorsComponent implements AfterViewInit {
  doctors: any = {};

  constructor(private listaDoctoresService: ListaDoctoresService) {}

  ngAfterViewInit() {
    //PARA SLIDER
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        620: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      } 
    });

  }

  ngOnInit(): void {
    //CONSULTAR DOCTORES
    this.listaDoctoresService.getDoctors().subscribe((data: any) => {
      this.doctors = data.list;
    });
  }
  
}

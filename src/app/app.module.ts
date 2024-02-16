import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MeetOurDoctorsComponent } from './components/meet-our-doctors/meet-our-doctors.component';
import { FormAppoinmentNewsletterComponent } from './components/form-appoinment-newsletter/form-appoinment-newsletter.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    MeetOurDoctorsComponent,
    FormAppoinmentNewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

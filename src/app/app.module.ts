import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MeetOurDoctorsComponent } from './components/meet-our-doctors/meet-our-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    MeetOurDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CityService } from './city.service';
import { CountryService } from './country.service';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule, routeComponent} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routeComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [CityService,CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

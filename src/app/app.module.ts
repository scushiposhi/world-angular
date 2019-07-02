import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CityService } from './city.service';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, ROUTE_COMPONENTS } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ROUTE_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CityService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

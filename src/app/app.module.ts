import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CityService } from './services/city.service';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, ROUTE_COMPONENTS } from './app-routing.module';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { HeaderComponent } from './components/header/header.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    ROUTE_COMPONENTS,
    TutorialComponent,
    AlertButtonComponent,
    HeaderComponent,
    CountryComponent
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

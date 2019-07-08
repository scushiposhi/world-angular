import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CityService } from './city.service';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, ROUTE_COMPONENTS } from './app-routing.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ROUTE_COMPONENTS,
    TutorialComponent,
    AlertButtonComponent,
    HeaderComponent
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

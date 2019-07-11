import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from '../../services/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../../country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-city-form',
  templateUrl: 'city-form.component.html',
  styles: []
})
export class CityFormComponent implements OnInit {

  citta: City;
  loaded: boolean;
  //code: string[];
  countries: Country[];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private routes: Router,
    private countryService: CountryService,
    private cityService:CityService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loaded = false;
    this.loadCity(id);
    this.countryService.getCountriesAll().subscribe((response) => { this.countries = response });
  }

  loadCity(id) {
    this.loaded = false;
    if (id === 0) {
      this.citta = new City;
      this.loaded = true;
    } else {
      this.cityService.getCityById(id).subscribe((response) => {
        this.citta = response;
        this.loaded = true;
        console.log("ARRIVATO SECONDO");
      });

    }

    console.log("ARRIVATO PRIMO");
  }

  goBack() {
    this.routes.navigate(['/cities', this.countryService.getCode()]);
  }
  newCity() {
    this.loadCity(0);
  }

  deleteCity(id) {
    this.cityService.deleteCityById(id).subscribe((response) => { this.citta = response });
    this.routes.navigate(['/cities', this.citta.countryCode]);
  }

  putCity() {
    if (this.citta.id !== 0 && this.citta.id !== null && this.citta.id !== undefined) {
      this.loadCity(this.citta.id);
      this.cityService.putCityService(this.citta).subscribe((response) => { this.citta = response })
    }
    else {
      this.cityService.postCityService(this.citta).subscribe((response) => { this.citta = response })
    }
    this.routes.navigate(['/cities', this.citta.countryCode]);
  }
}

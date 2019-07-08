import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city',
  templateUrl: 'city.component.html',
  styles: []
})
export class CityComponent implements OnInit {

  citta: City;
  loaded: boolean;

  constructor(private location: Location, private _cityService: CityService,
    private route: ActivatedRoute,
    private routes: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loaded = false;
    this.loadCity(id);
  }

  loadCity(id) {
    this.loaded = false;
    if (id === 0) {
      this.citta = new City;
      this.loaded = true;
    }
    this._cityService.getCityById(id).subscribe((response) => {
      this.citta = response;
      this.loaded = true;
      console.log("ARRIVATO SECONDO");
    });
    console.log("ARRIVATO PRIMO");
  }

  goBack() {
    this.location.back();
  }
  newCity() {
    this.loadCity(0);
  }

  deleteCity(id) {
    this._cityService.deleteCityById(id).subscribe((response) => { this.citta = response });
  }
  postCity() {

    this._cityService.postCityService(this.citta).subscribe((response) => { this.citta = response })
  }
  putCity() {
    this._cityService.putCityService(this.citta).subscribe((response) => { this.citta = response })
  }
}

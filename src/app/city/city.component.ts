import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city',
  template: `
  <div *ngIf="loaded">
  id:<input readonly type="text" value={{citta.id}}><br>
  nome:<input type="text" [(ngModel)]=citta.name value={{citta.name}}><br>
  code:<input type="text" [(ngModel)]=citta.countryCode  value={{citta.countryCode}}><br>
  popolazione:<input type="text" [(ngModel)]=citta.population value={{citta.population}}>
  <button type= button (click)=deleteCity(citta.id)>delete</button>
  <button type= button (click)=putCity()>put</button>
  <button type= button (click)=postCity()>post</button>
  </div>
  `,
  styles: []
})
export class CityComponent implements OnInit {

  citta: City;
  loaded: boolean;

  constructor(private _cityService: CityService, private route: ActivatedRoute, private routes: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loaded = false;
    this.loadCity(id);
  }

  loadCity(id) {
    this.loaded = false;
    this._cityService.getCityById(id).subscribe((response) => {
      this.citta = response;
      this.loaded = true;
      console.log("ARRIVATO SECONDO");
    });
    console.log("ARRIVATO PRIMO");
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

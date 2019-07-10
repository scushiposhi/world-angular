import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router, ParamMap } from '@angular/router';
import { City } from '../city-form/city';
import { CityService } from '../../services/city.service';
import { Location } from '@angular/common';
import { CityFormComponent } from '../city-form/city-form.component';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-city-list',
  templateUrl: 'city-list.component.html',
  styles: []
})
export class CityListComponent implements OnInit {

  
  private cities: City[];
  constructor(private location : Location,
              private routes: Router,
              private route: ActivatedRoute, 
              private _cityService: CityService) { }

  //ngOnInit viene eseguito solo alla creazione del component
  ngOnInit() {//lo snapshot non viene aggiornato in caso di next o previous
    let code = this.route.snapshot.paramMap.get('code');
    this._cityService.getCitiesByCode(code).subscribe((response) => { this.cities = response });
    /*soluzione:
      this.route.paramMap.subscribe((params:ParamMap)=>
    {let code = params.get('code') });
     */
  }
  onSelect(id) {
    this.routes.navigate(['/city', id]);
  }
  
  goBack(){
    this.location.back();
  }
 
}

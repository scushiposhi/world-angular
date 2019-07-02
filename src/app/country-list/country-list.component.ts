import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CountryService} from '../country.service';
import { ICountry } from '../country';

@Component({
  selector: 'app-country-list',
  template: `
  <div (click)="onSelect(country.code)" *ngFor = "let country of countries">
  <button>{{country.name}}</button>
  </div>
  `,
  styles: []
})
export class CountryListComponent implements OnInit {

  private countries:ICountry[];
  constructor(private route:ActivatedRoute, private routes : Router,private _countryService : CountryService) { }

  ngOnInit() {

   let continente = this.route.snapshot.paramMap. get('continent');
    this._countryService.getCountries(continente).subscribe((response)=>{this.countries=response});

  }
  onSelect(countryCode){
    this.routes.navigate(['/cities',countryCode]);
  }

}

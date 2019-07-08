import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-list',
  templateUrl: 'country-list.component.html',
  styles: []
})
export class CountryListComponent implements OnInit {

  public continente : string;
  private countries: Country[];
  constructor(private location: Location,
              private route: ActivatedRoute, 
              private routes: Router, 
              private _countryService: CountryService) { }

  ngOnInit() {

    this.continente = this.route.snapshot.paramMap.get('continent');
    this._countryService.getCountries(this.continente).subscribe((response) => { this.countries = response });

  }
  onSelect(countryCode) {
    this.routes.navigate(['/cities', countryCode]);
  }
  goBack() {
    this.location.back();
  }

}

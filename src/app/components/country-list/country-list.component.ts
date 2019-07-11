import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../country';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-country-list',
  templateUrl: 'country-list.component.html',
  styles: []
})
export class CountryListComponent implements OnInit {

  private countries: Country[];
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    let continente = this.route.snapshot.paramMap.get('continent');
    this.countryService.getCountries(continente).subscribe((response) => { this.countries = response });

  }
  onSelect(countryCode) {
    this.countryService.setCode(countryCode);
    this.routes.navigate(['/cities', countryCode]);
  }
  goBack() {
    this.routes.navigate(['/continents']);
  }

}

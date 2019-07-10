import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continent-list',
  templateUrl: 'continent-list.component.html',
  styles: []
})
export class ContinentListComponent implements OnInit {

  private continenti: [];
  constructor(
    private routes: Router,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.countryService.getContinents().subscribe((response) => {
      this.continenti = response;
    });
  }
  onSelect(continente) {
    this.countryService.setContinent(continente);
    this.routes.navigate(['/countries', continente]);
  }

}

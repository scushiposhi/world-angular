import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-continent-list',
  templateUrl:'continent-list.component.html' ,
  styles: []
})
export class ContinentListComponent implements OnInit {

  
  private continenti: [];
  constructor(private routes: Router, private _countryService: CountryService) { }

  ngOnInit() {
    this._countryService.getContinents().subscribe((response) => {
      this.continenti = response;
    });
    // this._countryService.getContinents().subscribe(data=>this.continenti=data);
  }
  onSelect(continente) {
    this.routes.navigate(['/countries', continente]);
  }

}

import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-continent-list',
  template: `
    <div (click)="onSelect(continente)" *ngFor = "let continente of continenti">
    <button > {{continente}}</button>
    </div>
  `,
  styles: []
})
export class ContinentListComponent implements OnInit {

  private continenti : [];
  constructor(private routes : Router,private _countryService : CountryService) { }

  ngOnInit() {
    this._countryService.getContinents().subscribe((response) => {
      this.continenti=response;
      });
   // this._countryService.getContinents().subscribe(data=>this.continenti=data);
  }
  onSelect(continente){
    this.routes.navigate(['/countries',continente]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { City } from '../city/city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  template: `
  <div (click)="onSelect(city.id)" *ngFor = "let city of cities">
  <button>{{city.name}}</button>
  </div>
  `,
  styles: []
})
export class CityListComponent implements OnInit {

  private cities : City[];
  constructor(private routes:Router,private route: ActivatedRoute, private _cityService: CityService) { }

  ngOnInit() {
    let code = this.route.snapshot.paramMap. get('code');
    this._cityService.getCitiesByCode(code).subscribe((response)=>{this.cities=response});
  }
  onSelect(id){
    this.routes.navigate(['/city',id]);
  }

}

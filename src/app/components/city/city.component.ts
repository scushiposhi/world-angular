import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city-form/city';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() city : City;
  constructor(private routes:Router,
             // private route : ActivatedRoute
               ) { }

  ngOnInit() {
   // let code = this.route.snapshot.paramMap.get('code');
  }
  onSelect(id) {
    this.routes.navigate(['/city', id]);
  }

}

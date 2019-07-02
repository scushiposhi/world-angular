import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  testo:string;

  constructor() { }

  ngOnInit() {
    this.testo = 'aaaa';
  }

  getClassByTesto():string{
    let color = 'green';
    if(this.testo.length > 3 && this.testo !== 'green'){
      color = 'blue';
    } else {
      color = 'green';
    }
    return color;
  }

  setTesto(newTesto: any){
    this.testo = newTesto;
    console.log(newTesto);
  }

}

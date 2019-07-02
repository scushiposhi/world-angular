import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  @Input()
  testoPulsante: string;

  @Output()
  testoPulsanteChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  openAlert(){
    this.testoPulsanteChange.emit("DEFAULT");
    alert(this.testoPulsante);
  }

}

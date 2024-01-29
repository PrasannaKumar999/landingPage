import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-tab',
  templateUrl: './flight-tab.component.html',
  styleUrls: ['./flight-tab.component.scss']
})
export class FlightTabComponent {
states = [1,2,3,4,5]

  constructor(){}

  ngOnInit(){

  }

}

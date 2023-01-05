import { Component } from '@angular/core';
import { Hero } from '../hero.dto';

@Component({
  selector: 'app-heroes-list',
  template: `
    <h2>{{ hero.callsign | uppercase }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div><span>name: </span>{{ hero.callsign }}</div>
    <hr>
    <div>
      <label for="callsign">Hero callsign: </label>
      <input id="callsign" [(ngModel)]="hero.callsign" placeholder="callsign" />
    </div>
  `,
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  hero: Hero = {
    id: 1,
    callsign: 'Windstorm',
  };
  constructor() {
    //
  }
}

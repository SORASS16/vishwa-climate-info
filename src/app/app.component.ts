import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-search></app-search>
    <app-weather></app-weather>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  weatherData: any;
}

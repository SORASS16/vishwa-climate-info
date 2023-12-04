// search.component.ts
import { Component } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { WeatherDataService } from '../shared/weatherdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchCity: string = '';

  errorMessage: string = '';

  constructor(
    private weatherService: WeatherService,
    private weatherDataService: WeatherDataService
  ) {}

  getWeather() {
    if (this.searchCity) {
      this.weatherService.getWeather(this.searchCity).subscribe((data) => {
        this.weatherDataService.setWeatherData(data);
        console.log(data);
        this.errorMessage = '';
      },
      (error) => {
        this.weatherDataService.setWeatherData(null);
        this.errorMessage = 'City not found. Please enter a valid city name.';
        console.error(error);
      });
    }
  }
}

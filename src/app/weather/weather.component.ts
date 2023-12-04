import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherDataService } from '../shared/weatherdata.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  searchCity: string = ""
  constructor(
    private weatherService: WeatherService,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit() {
    this.weatherDataService.weatherData$.subscribe((data) => {
      this.weatherData = data;
      this.updateSearchCity();
      this.updateBodyBackground();
    });
  }

  updateSearchCity() {
    this.searchCity = this.weatherData?.name || 'default'; // Use a default city if the name is not available
  }

  updateBodyBackground() {
    if(this.weatherData){
      const imageUrl = `url('https://source.unsplash.com/1600x900/?${this.searchCity}')`;
      document.body.style.backgroundImage = imageUrl;
    }
    else{
      const imageUrl = `url('https://source.unsplash.com/1600x900/?delhi')`;
      document.body.style.backgroundImage = imageUrl;
    }
    
  }

}


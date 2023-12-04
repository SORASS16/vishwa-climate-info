// weather-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private weatherDataSubject = new BehaviorSubject<any>(null);
  weatherData$ = this.weatherDataSubject.asObservable();

  setWeatherData(data: any) {
    this.weatherDataSubject.next(data);
  }
}

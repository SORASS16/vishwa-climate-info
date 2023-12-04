import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private apiKey = 'c961886e4779c69fa231e6672fb06257';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params });
  }
}

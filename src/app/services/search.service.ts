import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, Subject } from 'rxjs';
import { WeatherResponse } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchText!: Subject<string>;

  constructor(private http: HttpClient) {
    this.searchText = new Subject();
  }

  fetchWeatherByCity(city: string): Observable<WeatherResponse> {
    const endPointUrl = `${environment.apiUrl}/weather?q=${city}&appid=${environment.apiKey}`;
    return this.http.get<WeatherResponse>(endPointUrl).pipe(map((res) => res));
  }
}

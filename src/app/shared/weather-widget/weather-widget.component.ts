import { Component, Input, OnInit } from '@angular/core';
import { Weather, WeatherResponse } from 'src/app/interfaces/weather.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  @Input() weather!: WeatherResponse;
  dateTime!: Date;
  iconPath!: string;
  weatherMain! : Weather;

  constructor() {}

  ngOnInit(): void {
    this.dateTime = new Date();
    this.weatherMain = this.weather.weather[0];
    this.iconPath = environment.assetUrl + this.weatherMain.icon + '.png';
    console.log(this.weather);
  }
}

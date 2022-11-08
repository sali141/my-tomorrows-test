import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces/weather.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})
export class WeatherReportComponent implements OnInit {
  isLoading: boolean = false;
  weather!: WeatherResponse;
  errorMsg!: string;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchText.subscribe((data) => {
      this.isLoading = true; // show the initial loading untill the data recieved from API
      this.searchService.fetchWeatherByCity(data).subscribe(
        (response: WeatherResponse) => {
          console.log(response);
          this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
          this.errorMsg = 'Unknown error occured';
        }
      );
    });
  }
}

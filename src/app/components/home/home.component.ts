import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces/weather.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  weather!: WeatherResponse | null;
  errorMsg!: string | null;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchText.subscribe((data) => {
      this.isLoading = true;
      this.searchService.fetchWeatherByCity(data).subscribe(
        (response: WeatherResponse) => {
          this.weather = response;
          this.errorMsg = null;
        },
        (err: any) => {
          this.isLoading = false;
          this.weather = null;
          if (err.error && err.error.message) {
            this.errorMsg = err.error.message;
            return;
          }
          this.errorMsg = 'Unknown error occured';
        },
        () => {
          this.isLoading = false;
        }
      );
    });
  }

  goBack() {
    this.isLoading = false;
    this.weather = null;
  }
}

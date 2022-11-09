import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  searchedCity!: string;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  searchWeather() {
    if (this.searchedCity) {
      this.searchService.searchText.next(this.searchedCity);
    }
  }
}

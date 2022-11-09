import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherSearchComponent } from './shared/weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherReportComponent,
    WeatherSearchComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

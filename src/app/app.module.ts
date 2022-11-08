import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

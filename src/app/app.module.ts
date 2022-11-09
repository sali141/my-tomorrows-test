import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherSearchComponent } from './shared/weather-search/weather-search.component';
import { WeatherWidgetComponent } from './shared/weather-widget/weather-widget.component';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { CelsiusPipe } from './pipes/celsius.pipe';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherReportComponent,
    WeatherSearchComponent,
    WeatherWidgetComponent,
    ErrorMessageComponent,
    WeatherIconPipe,
    CelsiusPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularCountriesFlagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CelsiusPipe } from './pipes/celsius.pipe';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { HeaderComponent } from './shared/header/header.component';
import { WeatherSearchComponent } from './shared/weather-search/weather-search.component';
import { WeatherWidgetComponent } from './shared/weather-widget/weather-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
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

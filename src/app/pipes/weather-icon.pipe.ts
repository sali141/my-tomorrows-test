import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(value: string): string {
    return environment.assetUrl + value + '.png';
  }

}

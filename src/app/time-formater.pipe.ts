import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormater',
})
export class TimeFormaterPipe implements PipeTransform {
  transform(seconds: number): string {
    console.log(seconds);
    if (!seconds) return '';
    const diffDate = new Date(String(seconds));
    console.log(diffDate);
    const result = `${diffDate.getUTCMonth()}`;

    return result;
  }
}

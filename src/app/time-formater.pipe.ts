import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormater',
})
export class TimeFormaterPipe implements PipeTransform {
  transform(seconds: number): string {
    if (!seconds) return 'Unknow';

    const diffDate = new Date(0);
    diffDate.setUTCSeconds(seconds);

    return diffDate.getUTCMonth()
      ? `${diffDate.getUTCMonth()} month and ${diffDate.getUTCDate() - 1} days`
      : `${diffDate.getUTCDate() - 1} days`;
  }
}

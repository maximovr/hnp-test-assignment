import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';

@Pipe({
  name: 'dateToLocale'
})
export class DateToLocalePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  transform(value: string, args?: any): string {
    return new Date(value).toLocaleDateString(this.locale);
  }

}

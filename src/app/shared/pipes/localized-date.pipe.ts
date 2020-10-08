import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(
    private translateService: TranslateService,
    private datePipe: DatePipe
  ) { }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const lang = this.translateService.currentLang;
    return this.datePipe.transform(value, pattern, undefined, lang).replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(text: any, limit?: number) {
    if (!text) {
      return null;
    }
    return text.slice(0, limit ? limit : 50) + '...';
  }
}

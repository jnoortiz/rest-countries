import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(value?: string[], sep = ', '): string {
    if (value) {
      return value.join(sep);
    } else {
      return '';
    }
  }
}

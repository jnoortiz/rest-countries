import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameObjJoin',
})
export class NameObjJoinPipe implements PipeTransform {
  transform(value?: { name: string | null }[] & any[], sep = ', '): string {
    if (value) {
      const csvArr: string[] = [];
      value.forEach((val) => {
        if (val.name) {
          csvArr.push(val.name);
        }
      });
      return csvArr.join(sep);
    } else {
      return '';
    }
  }
}

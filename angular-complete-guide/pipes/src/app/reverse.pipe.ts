import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false,
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    value.map((val: any) => {
      val.instanceType = val.instanceType.split('').reverse().join('');
    });
    return value;
  }
}

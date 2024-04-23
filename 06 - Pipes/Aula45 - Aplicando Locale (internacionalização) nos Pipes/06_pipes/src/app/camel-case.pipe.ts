import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let values = (value as string).split(' ');
    let result = '';

    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string): string {
    return value.substring(0, 1).toLocaleUpperCase() + value.substring(1).toLocaleLowerCase();
  }
}

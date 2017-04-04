import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class RepeatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const num = (args && args[0]) ? args[0] : 3;
    return value.repeat(num);
  }

}

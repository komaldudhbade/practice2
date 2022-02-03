import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let format = ' K/H';
    if(args[0] && args[0] == 'm'){
      format = ' M/H';
    }
    return value+format;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtru'
})
export class FiltruPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

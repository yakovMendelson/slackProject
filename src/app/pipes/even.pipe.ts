import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  transform(value: number[]) :number[]{
    let resolt:number[]=[];
    value.forEach(val=>{
      if(!(val % 2))
      resolt.push(val)
    })
      return resolt;
  }

}

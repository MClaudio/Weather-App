import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, deg:string): unknown {
    
    if(deg === "F"){
      
      return Number(((value*1.8)+32).toFixed(2))
    }else{
      return value
    }
    
  }

}

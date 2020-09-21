import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, val:string): unknown {   
    if(val === "F"){  
      return Number(((value*1.8)+32).toFixed(2))
    }else if(val === "C"){
      return value
    }
    if(val === "mph"){
      return Number((value*2.236936).toFixed(2))
    }else if(val === "m/s"){
      return value
    }
    
  }

}

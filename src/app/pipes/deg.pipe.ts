import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deg'
})
export class DegPipe implements PipeTransform {

  transform(value: unknown): string {
    //console.log("value", value)
    if(value === 0){
      return "N"
    }
    if(value > 0 || value < 45){
      return "NNE"
    }
    if(value === 45){
      return "NE"
    }
    if(value > 45 || value < 90){
      return "ENE"
    }
    if(value === 90){
      return "E"
    }
    if(value > 90 || value < 135){
      return "ESE"
    }
    if(value === 135){
      return "SE"
    }
    if(value > 135 || value < 180){
      return "SSE"
    }
    if(value === 180){
      return "S"
    }
    if(value > 180 || value < 225){
      return "SSW"
    }
    if(value === 225){
      return "SW"
    }
    if(value > 225 || value < 270){
      return "WSW"
    }
    if(value === 270){
      return "W"
    }
    if(value > 270 || value < 315){
      return "WNW"
    }
    if(value === 315){
      return "NW"
    }
    if(value > 315 || value < 0){
      return "NNW"
    }
    
  }

}

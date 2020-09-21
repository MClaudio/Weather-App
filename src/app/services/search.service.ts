import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  URI="https://api.openweathermap.org/data/2.5/"
  API_KEY="8c79e51047d728ff0de1fb221d8d5127"

  open:boolean = false
  todayWeather:any={};
  deg = "C";
  speed = "m/s"
  days:any=[];
  loader:boolean= false;

  constructor(private http:HttpClient) { }

  getCurrentPosition(lat:number,lon:number){
    this.loader= true;
    this.http.get(`${this.URI}weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`).subscribe((data:any)=>{
      this.model(data);
      //console.log("getWeather",this.todayWeather)
      this.loader= false;
    });
  }

  getDefault(){
    this.loader= true;
    this.http.get(`${this.URI}weather?lat=37.39&lon=-122.08&units=metric&appid=${this.API_KEY}`).subscribe((data:any)=>{
      this.model(data); 
      this.loader= false;
      //console.log("default",this.todayWeather)
    });
  }

  searchLocations(query:string){
    return this.http.get(`${this.URI}find?&q=${query}&type=like&sort=population&cnt=30&appid=${this.API_KEY}`)
  }

  getLocationId(id:number){
    this.loader= true;
    this.http.get(`${this.URI}weather?id=${id}&units=metric&appid=${this.API_KEY}`).subscribe((data:any)=>{
      this.model(data);
      this.loader= false;
      //console.log("Por id",this.todayWeather)
    });
  }

  forecast(id:number){
    this.loader= true;
    this.http.get(`${this.URI}forecast?id=${id}&units=metric&appid=${this.API_KEY}`).subscribe((data:any)=>{
      this.days = [];

      data.list.filter((day, idx) => {
        
        if(day.dt_txt.endsWith("00:00:00")){
          let maxTemp=0;
          let minTemp=1000;

          //console.log(idx+" Condicion", day)

          for (let index = idx; index < 8+idx; index++) {
            try {
              //console.log(data.list[index].dt_txt+" index", index)

            if(data.list[index].main.temp_max > maxTemp){
              maxTemp = data.list[index].main.temp_max;
            }

            if(data.list[index].main.temp_min < minTemp){
              minTemp = data.list[index].main.temp_min;
            }
            } catch (error) {
              //console.log('Indice Fuera')
            }

          }

          //console.log();
         // console.log(idx+" Condicion", day)

          this.days.push({
            day,
            temp:{"max_temp":maxTemp, "min_temp":minTemp}
          })

          //console.log(idx+" element",element)
        } 
      })

      //console.log(this.days)
      
      this.loader= false;
    });
  }


  model(data:any){
    console.log(data);
    this.todayWeather = {
      "deg": this.deg,
      "dt": new Date(data.dt* 1000).toLocaleDateString("en-US"),
      "locate":{
        "id": data.id,
        "name": data.name,
        "country": data.sys.country
      },
      "weather": data.weather,
      "main": {
        "temp": data.main.temp,
        "pressure":data.main.pressure,
        "humidity":data.main.humidity
      },
      "visibility": data.visibility/1000,
      "wind": data.wind,
    }; 
    //console.log(this.todayWeather);
    this.forecast(data.id);
  }
  

}

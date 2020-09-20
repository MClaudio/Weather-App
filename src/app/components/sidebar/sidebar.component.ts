import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  lat: number;
  lng: number;
  loader:boolean =false;

  constructor(public searchService: SearchService) { 
    this.getWeatherDefailt();
  }

  async ngOnInit() {
    //await this.getUserLocation();
  }

  async getCurrentLocation() {
    if (typeof this.lat === "undefined" || typeof this.lng === "undefined") {
      await this.getUserLocation();
    }else{
      this.getWeather();
    }
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getWeather();
      });
    }
  }

  getWeather() {
    this.loader = true;
    this.searchService.getCurrentPosition(this.lat, this.lng)
    this.loader = false;
    //this.todayWeather = this.searchService.todayWeather;
    
  }

  getWeatherDefailt() {
    this.loader = true;
    this.searchService.getDefault();
    this.loader = false;
    //this.todayWeather = this.searchService.todayWeather;
    
  }

}

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  constructor(public searchService:SearchService) { }

  ngOnInit(): void {
    
  }

  getTodayWeather(){

  }

  changeC(){
    this.searchService.deg = "C"
    this.searchService.speed = "m/s"
  }

  changeF(){
    this.searchService.deg = "F"
    this.searchService.speed = "mph"
  }

  

}

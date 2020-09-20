import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searcLocation:String;
  loader:boolean=false;
  locations:any;

  constructor(public searchService:SearchService) { }

  ngOnInit(): void {
  }

  searchForm(form:NgForm){
    //this.searcLocation = form.value.search;
    this.loader= true;
    this.searchService.searchLocations(form.value.search).subscribe((data:any)=>{
      this.locations = data.list;
      //console.log(this.locations);
      this.loader= false;
    })
    
  }

  searchId(id:number){
    //console.log(id)
    this.searchService.getLocationId(id);
    this.searchService.open = !this.searchService.open;
  }

}

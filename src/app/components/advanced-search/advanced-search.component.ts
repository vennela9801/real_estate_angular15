import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from 'src/app/models/search-model.model';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit{

  searchModel : SearchModel = new SearchModel;

  constructor(private service: CommonServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  search(){
 console.log('add clicked ',this.searchModel);
    this.service.searchRecords(this.searchModel).subscribe(resp => {
      if(resp.statusCode == 200){
       
      }
      
    });
  }

  clearDetails(){

  }
}

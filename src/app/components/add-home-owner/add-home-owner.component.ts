import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeOwnerModel } from 'src/app/models/home-owner-model.model';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-add-home-owner',
  templateUrl: './add-home-owner.component.html',
  styleUrls: ['./add-home-owner.component.css']
})
export class AddHomeOwnerComponent {

  homeOwner : HomeOwnerModel = new HomeOwnerModel;

  constructor(private service: CommonServiceService, private router: Router) { }
  
  addHomeOwner(){
    console.log('add clicked ',this.homeOwner.dob);
    this.service.addHouseOwners(this.homeOwner).subscribe(resp => {
      if(resp.statusCode == 200){
        window.alert("Home Owner has been added, Home Owner Id is : "+resp.id);
        this.router.navigate(["home"]);
      }
      else
        window.alert("Something went wrong when trying to add Agent, please try again later.");
    });
  }

  clearDetails(){
    
  }
}

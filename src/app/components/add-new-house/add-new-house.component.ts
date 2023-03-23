import { Component, OnInit } from '@angular/core';
import { HouseModel } from 'src/app/models/house-model.model';

@Component({
  selector: 'app-add-new-house',
  templateUrl: './add-new-house.component.html',
  styleUrls: ['./add-new-house.component.css']
})
export class AddNewHouseComponent implements OnInit{

  newHouse: HouseModel = new HouseModel;
  ngOnInit() {
  }

  addNewHouse() {
    console.log('add clicked ',this.newHouse.houseType);
  }
  clearHouseDetails() {
    console.log('clear clicked');
    this.newHouse = new HouseModel;
  }
}

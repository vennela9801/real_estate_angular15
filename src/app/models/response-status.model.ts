import { HomeComponent } from "../components/home/home.component";
import { HouseModel } from "./house-model.model";

export class ResponseStatus {
    message : string = '';
    statusCode : number = 0;
    id : number = 0;
    obj: any;
    homeDetails: HouseModel = new HouseModel;
}

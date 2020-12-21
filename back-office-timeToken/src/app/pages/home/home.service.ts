
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";

import { HttpClient, HttpRequest } from '@angular/common/http';
import {API_URL} from "../../app.constant";
import {BehaviorSubject} from "rxjs";
import {Home} from "./home.model";




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private adminUrl: string = API_URL +'admin';
  private userUrl: string = API_URL +'user';
  private transactionUrl: string = API_URL +'transaction';
  private activityUrl: string = API_URL +'activity';
  private promotionUrl: string = API_URL +'promotion';
  private companyUrl: string = API_URL +'company';


  constructor(private http:HttpClient){
  }

  
  getUsersCount(){
    return this.http.get<Object>(this.userUrl+"/getUsersCount");
  }
  getAdminsCount(){
    return this.http.get<Object>(this.adminUrl+"/getAdminsCount");
  }
  getCompaniesCount(){
    return this.http.get<Object>(this.companyUrl+"/getCompaniesCount");
  }

  getTransactionsCount(){
    return this.http.get<Object>(this.transactionUrl+"/getTransactionsCount");
  }
  getActivitiesCount(){
    return this.http.get<Object>(this.activityUrl+"/getActivitiesCount");
  }
  getPromotionsCount(){
    return this.http.get<Object>(this.promotionUrl+"/getPromotionsCount");
  }
  


  /* getWeeklyScreening(){
    return this.http.get<Object>(this.calculUrl+"/getWeeklyScreening");
  }

  getUsersPassigTestsCount(){
    return this.http.get<Object>(this.userUrl+"/getUsersPassigTestsCount");
  }


  getPassResult(){
    return this.http.get<Object>(this.calculUrl+"/getPassResult");
  }

  getPassRestrictionResult(){
    return this.http.get<Object>(this.calculUrl+"/getPassRestrictionResult");
  }

  getFurtherActionRequiredResult(){
    return this.http.get<Object>(this.calculUrl+"/getFurtherActionRequiredResult");
  } */


}


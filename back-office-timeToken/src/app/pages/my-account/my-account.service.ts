
import { Observable } from 'rxjs/Observable';

import {Injectable} from "@angular/core";

import { HttpClient, HttpRequest } from '@angular/common/http';
import {API_URL} from "../../app.constant";
import {MyAccount} from "./my-account.model";
import { environment } from '../../../environments/environment.prod';




@Injectable({
    providedIn: 'root'
  })
export class MyAccountService {
  private adminUrl: string = API_URL +'admin';
  private memberUrl: string = API_URL +'member';
  private oauthUrl = "";
  headers1:any=environment.headers1;

  constructor(private http:HttpClient){

  }
 
  
 

  updateUserPassword(id:number,password:any):Observable<Object>{
    return this.http.post(this.memberUrl+"/updateUserPassword?id="+id,password, {responseType: 'text'});
  }

  updateUserPaymentDetails(id:number,paymentDetails:any):Observable<Object>{
    return this.http.post(this.memberUrl+"/updateUserPaymentDetails?id="+id,paymentDetails, {responseType: 'text'});
  }

  updateUserEmail(id:number,email:any):Observable<Object>{
    return this.http.post(this.memberUrl+"/updateUserEmail?id="+id,email, {responseType: 'text'});
  }

  
  getUserById(userId:number){
    return this.http.get<Object>(this.memberUrl+"/getMemberById?id="+userId);
  }


  updateUserPasswordFromOauth(memberInfo):Observable<Object>{
    let header:any=JSON.parse(JSON.stringify(this.headers1));
   
    return this.http.post(this.oauthUrl+"app/update_password", memberInfo , header);
  }



}


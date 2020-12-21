import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL, TEST_ID } from '../../app.constant';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class ActivitiesService {
    private userUrl: string = API_URL+'user';
    private adminUrl: string= API_URL+'admin';
    private companyUrl:string=API_URL+'company';
    private activityUrl:string=API_URL+'activity';
    private oauthUrl: string = "/";

    constructor(private http: HttpClient) {
    }

     getActivitiesDetails(search:any):Observable<Object[]>{
       return this.http.get<Object[]>(this.activityUrl+'/getActivitiesDetails?search='+search);
    }; 

    getActivityDetailsById(id:any): any {
        return this.http.get<any>(this.activityUrl+'/getActivityDetailsById?id='+id);
      }

    getActivityById(id:any): any {
      return this.http.get<any>(this.activityUrl+'/getActivityById?id='+id);
    }
    
    
    deleteActivity(id: number): Observable<Object> {
    return this.http.post(this.activityUrl + '/deleteActivity?id='+id, {responseType: 'text'});
    }
      

    verifyActivity(verificationDetails:Object):Observable<any>{
      return this.http.post(this.activityUrl+'/verifyActivity',JSON.stringify(verificationDetails), {responseType: 'text'});
    }
    

  }
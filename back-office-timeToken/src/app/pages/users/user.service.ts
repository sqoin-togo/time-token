
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from './user.model';
import { API_URL, TEST_ID } from '../../app.constant';



@Injectable({
    providedIn: 'root'
  })
export class UserService {
  private userUrl: string = API_URL+'user';
  private adminUrl: string= API_URL+'admin';
  private transactionUrl:string=API_URL+'transaction';
  private oauthUrl: string = "/";

  constructor(private http: HttpClient) {
  }


  getAllUsers(search): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl+'/getAllUsers?search='+search);
  }

  getAllAdmins(search:any): Observable<User[]> {
    return this.http.get<User[]>(this.adminUrl+'/getAllAdmins?search='+search);
  }

  /* getAllRoles(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl+'/getAllRoles');
  } */
  

  getUserById(id: number): any {
    return this.http.get<any>(this.userUrl+'/getUserById?id=' + id);
  }

  getUserInformation(id:number):any{
    return this.http.get<any>(this.userUrl+'/getUserInformation?id=' + id);

  }

  getInTrasactionsByUserId(id:number):any{
    return this.http.get<any>(this.transactionUrl+'/getInTransactionsByUserId?id='+id);
  }

  getOutTrasactionsByUserId(id:number):any{
    return this.http.get<any>(this.transactionUrl+'/getOutTransactionsByUserId?id='+id);
  }


/*   getUserRoleByuserId(id:number):Observable<any>{
    return this.http.get<any>(this.userUrl+"/getUserRoleByuserId?userId="+id);
  } */

  addUser(user: Object,organizationId:number): Observable<Object> {
    return this.http.post(this.adminUrl+`/createOrganizationUsers?testId=${TEST_ID}&organizationId=${organizationId}`,JSON.stringify(user), {responseType: 'text'});
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.post(this.userUrl + '/deleteUser?id='+id, {responseType: 'text'});
  }
  
  updateUser(id: number, user: Object): Observable<Object> {
    return this.http.post(this.userUrl+'/updateUser?id='+id, user, {responseType: 'text'});
  }
 
/*   addRoleToUser(userId: number, roleId: Object): Observable<Object> {
    return this.http.post(this.userUrl+'/addRoleToUser?userId='+userId+"&roleId="+roleId, null, {responseType: 'text'});
  } */
  
/*   removeRoleFromUser(userId: number, roleId: Object): Observable<Object> {
    return this.http.post(this.userUrl+'/removeRoleFromUser?userId='+userId+"&roleId="+roleId, null, {responseType: 'text'});
  } */

  
/*   saveUserRoles(userId:any,rolesList:Object): Observable<Object> {
    return this.http.post(this.userUrl+'/setUserPermissions?userId='+userId, rolesList, {responseType: 'text'});
  } */

/*   getUsersAnwsersAndResultByuserId(userId: number):Observable<any>{
    return this.http.get<any>(this.calculUrl+'/getUsersAnwsersAndResultByuserId?userId='+userId);
  } */
  
  enableUser(email: string):Observable<any>{
    return this.http.get(this.oauthUrl+'app/ConfirmAccountWithEmailNotification?email='+email, {responseType: 'text'});
  }

  setUserEnabled(userId: number):Observable<any>{
    var object={"enabled":1} ;
    return this.http.post(this.userUrl+'/enableUser?id='+userId,{responseType: 'text'});
  }

  /*download() : Observable<Object> {
   
    return this.http.get(this.downloadUrl);// ResponseContentType.Blob
  }*/
  
}


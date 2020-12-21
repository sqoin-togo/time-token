import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { User } from "./user.model";
import { API_URL, TEST_ID, GENERIC_PASSWORD } from "../../app.constant";
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  err: any;
  headers1: any = environment.headers1;

  private adminUrl: string = API_URL + 'admin/';
  private userUrl: string = API_URL + 'user/';

  //private oauthUrl = "https://oauth.sagecity.io/";
  private oauthUrl = "/";

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();


  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  Login(email: string, password: string) {
    return this.http.post<any>(this.userUrl + 'login', { email, password }).pipe(
      map(
        data => {
          if (data.status == 200) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.currentUserSubject.next(data);

            return data;
          } else {
            return Observable.throw(this.err);
          }
        }
      )
    )
  }
  /*
  getAuthenticatedUser() {
    return localStorage.getItem(username)
  }
  isUserLoggedIn() {
    let user = localStorage.getItem(username)
    return username;
  }*/
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  register(member: Object): Observable<Object> {
    return this.http.post(this.adminUrl + 'register?testId=' + TEST_ID, member, { responseType: 'text' });
  }


  login(loginPayload) {
    let header: any = JSON.parse(JSON.stringify(this.headers1));
    header.headers['Content-type'] = 'application/x-www-form-urlencoded';
    return this.http.post(this.oauthUrl + 'oauth/token', loginPayload, header);
  }


  registerverification(member) {
    let OauthRegistrationData = {
      "email": member.email,
      "password": member.password
    };
    return this.http.post(this.oauthUrl + 'app/registerToNewNorm', OauthRegistrationData);
  }

  registerUser(user) {
    let data = {
      "email": user.email,
      "password": GENERIC_PASSWORD
    };
    return this.http.post(this.oauthUrl + 'app/register', data);
  }





}

import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject,throwError} from 'rxjs';

import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators';

import {User} from "./user.model";
import {Router} from "@angular/router";
import {error} from "util";



export const role = 'role'
export const ref = 'ref'
export const username = 'username'
export const refCommercial = 'refCommercial'
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private user:User[]=[];
    err:any;




    constructor(private http:HttpClient,
                private router:Router){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();


    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }
 
    getAuthenticatedUser() {
        return localStorage.getItem(username)
    }
    isUserLoggedIn() {
        let user = localStorage.getItem(username)
        return username;
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

}

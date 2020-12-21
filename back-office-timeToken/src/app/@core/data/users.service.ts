
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private connectedUser =JSON.parse(localStorage.getItem("currentUser"));
  private fullName = this.connectedUser.member.firstname + " "+  this.connectedUser.member.lastname  ; 
  
  
  

  private userArray: any[];

  private users = {
    nick: { name: this.fullName, picture: 'assets/images/nick.png' },
  
  };

  

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}

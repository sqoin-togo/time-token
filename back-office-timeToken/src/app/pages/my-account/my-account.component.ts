import {Component, OnInit, ɵConsole} from '@angular/core';
import {Router} from "@angular/router";

import { Subject } from 'rxjs';
import {MyAccount} from "./my-account.model";
import {MyAccountService} from "./my-account.service";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'ngx-dashboard',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent  implements OnInit{

    user:any;
    payment_details:any;
    emailButton="Edit";
    passwordButton="Change";
    paymentButton="Edit"
    constructor(private router:Router,private formBuilder:FormBuilder,private myAccountService:MyAccountService){
    }
    
    ngOnInit() {
      this.user= JSON.parse(localStorage.getItem("currentUser")).member;
      let fullPaymentDetails:String=this.user.payment_details;
      this.payment_details=fullPaymentDetails===null ? "" : "****"+fullPaymentDetails.slice(fullPaymentDetails.length-4, fullPaymentDetails.length);
   }
 
   getUserById(userId){
    this.myAccountService.getUserById(userId).subscribe(
      data=>{
        this.user=data;
      },
      err=>{console.log("error "+err);}
    )
   }

   updateLocalStorage(userId){
    this.myAccountService.getUserById(userId).subscribe(
      data=>{
        localStorage.setItem("currentUser",JSON.stringify(data))
      },
      err=>{console.log("error "+err);}
    )
   }

   editEmail(){
      if(this.emailButton==="Save"){
        var newEmail=(<HTMLInputElement>document.getElementById('email')).value;
        console.log("saveService"+newEmail);
        this.updateUserEmail(newEmail);
        (<HTMLInputElement>document.getElementById('email')).disabled = true;
        this.emailButton="Edit";
        return;
      }
      if(this.emailButton==="Edit"){
        document.getElementById('email').removeAttribute("disabled");
        this.emailButton="Save";
      }
   }

   updateUserEmail(newEmail){
    this.myAccountService.updateUserEmail(this.user.id,newEmail).subscribe(
      data=>{
        console.log("data "+data);
        this.updateLocalStorage(this.user.id);
      },
      err=>{console.log("error "+err);}
    )
   }

   editPassword(){
      if(this.passwordButton==="Save"){
        var newPassword=(<HTMLInputElement>document.getElementById('password')).value;
        console.log("saveService"+newPassword ,  "email => ",this.user.email  , "id => ", this.user.id);
        let memberInfo ={
          "email": this.user.email,
          "password": newPassword
        }
        this.updateUserPassword(newPassword);
        this.updateUserPasswordFromOauth(memberInfo);
        (<HTMLInputElement>document.getElementById('password')).disabled = true;
        this.passwordButton="Change";
        return;
      }
      if(this.passwordButton==="Change"){
      document.getElementById('password').removeAttribute("disabled");
      this.passwordButton="Save";
      }
   }

   updateUserPassword(newPassword){
    this.myAccountService.updateUserPassword(this.user.id,newPassword).subscribe(
      data=>{
        console.log("data "+data);
        this.updateLocalStorage(this.user.id);
      },
      err=>{console.log("error "+err);}
    )
   }


   updateUserPasswordFromOauth(memberInfo){
    this.myAccountService.updateUserPasswordFromOauth(memberInfo).subscribe(
      data=>{
        console.log("data "+data);
      },
      err=>{console.log("error "+err);}
    )
   }
   editPaymentDetails(){
    if(this.paymentButton==="Save"){
      var newPaymentDetails=(<HTMLInputElement>document.getElementById('paymentDetails')).value;
      console.log("saveService"+newPaymentDetails);
      this.updateUserPaymentDetails(newPaymentDetails);
      (<HTMLInputElement>document.getElementById('paymentDetails')).disabled = true;
      this.paymentButton="Edit";
      window.window.location.reload();
      return;
    }
    if(this.paymentButton==="Edit"){
    document.getElementById('paymentDetails').removeAttribute("disabled");
    this.paymentButton="Save";
    }
   }

   updateUserPaymentDetails(newPaymentDetails){
    this.myAccountService.updateUserPaymentDetails(this.user.id,newPaymentDetails).subscribe(
      data=>{
        console.log("data "+data);
        this.updateLocalStorage(this.user.id);
      },
      err=>{console.log("error "+err);}
    )
   }
}

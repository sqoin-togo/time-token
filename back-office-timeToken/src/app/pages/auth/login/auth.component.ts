import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { AuthService } from '../auth.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
err:number;
  submitted=false;
  loginForm:FormGroup;
  username="";
  password="";
  constructor(private router:Router,
              private fromBuilder:FormBuilder,
              private authService:AuthService
              ) {

  }

  ngOnInit() {

    this.loginForm=this.fromBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    })

  }
  get formValid() {
    return this.loginForm.controls;
  }

  register(){
    this.router.navigate(['auth/register']);
  }

  login(login:any){
    this.authService.Login(login.email,login.password).pipe(first()).subscribe(
      data=>{
        this.router.navigate(['pages/home'])
         },err=>{

      }
    )
  }



  onSubmit() {
      this.submitted=true;
     var login: any ={... this.loginForm.value}

      const body = new HttpParams()
      .set('username', login.email)
      .set('password', login.password)
      .set('grant_type', 'password');
      this.authService.login(body.toString())
      .subscribe((data:any) =>{
        console.log("data is "+data);
        window.sessionStorage.setItem('token', data.access_token);
        this.login(login);
      },
      error=>{
        if(error.error.error==="invalid_request"||error.error.error_description==='Bad credentials'){
          this.err=2;
        }
        if(error.error.error_description==="user_not_enabled"){
          this.err=1;
        }
        console.log("error "+JSON.stringify(error));
        this.submitted=false;
      });
}








}

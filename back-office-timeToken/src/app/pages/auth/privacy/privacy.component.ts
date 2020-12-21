import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  
  protection=false;
  conditions=false;

  constructor( private router:Router) { }

  ngOnInit() {

  }
 
  confirm(){
    if(this.protection && this.conditions){
      this.router.navigate(['auth/login']);
    }else{
      return;
    }
   }

    
  cancel(){
    this.router.navigate(['auth/register']);
   }
   
}

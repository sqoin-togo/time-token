import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  {

  authStatus: boolean;
  
  constructor(protected router: Router,
    
    private loginService:AuthService,
    ) 
  {
    
    this.authStatus = false;
    console.log("logout dashboard");
    this.loginService.logout();
      setTimeout(() => {
        return this.router.navigate(['auth/login']);
      }, 1000);

     
        
     }
      
  
 

    
  }

 


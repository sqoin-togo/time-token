import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'ngx-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.scss']
})
export class EmailValidationComponent  implements OnInit{
   

    constructor(private router:Router){
    }
    
    ngOnInit() {  
      
   }
 

   continue(){
     console.log("continue");
     this.router.navigate(['/privacy'])
   }
  
  
}

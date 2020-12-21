import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ConfirmPasswordValidator } from './must-match.validator';
import { EmailValidator } from '../../../validators/email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  err = 0;
  constructor(private router: Router,
    private fromBuilder: FormBuilder,
    private authService: AuthService, emailValidator: EmailValidator) {
    this.registerForm = this.fromBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required, emailValidator.validate.bind(emailValidator),
        Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.compose([
        Validators.required
      ])],

    }, { validator: ConfirmPasswordValidator.MatchPassword })


  }

  ngOnInit() {


  }


  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    /* if(this.formValid.password!==this.formValid.confirmPassword){
      // alert("wrong");
       return;
     }*/
    let member = { ... this.registerForm.value }
    this.authService.registerverification(member)
      .subscribe(
        data => {
          this.register(member);
        },
        error => {
          this.err = 1;
          this.submitted = false;
          console.log("error " + error);
        }
      )
  }

  register(member) {
    this.authService.register(member).subscribe(
      data => {
        this.router.navigate(['auth/email-validation']);
      },
      err => {
        console.log("error " + err);
      })
  }


  hasError(field: string, error: string) {
    const ctrl = this.registerForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { CompaniesService } from "../companies.service";
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreatecompanyComponent implements OnInit {

  id: any;
  editMode = false;
  addForm: FormGroup;
  submitted = false;
  valid = false;

  /* admins=[];
  public companyQrCode: string = null; */

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private authService: AuthService,
    private activateRouter: ActivatedRoute) {

    this.addForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', []),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', []),
      adress: new FormControl('', []),
      country_code: new FormControl('', []),
      phone: new FormControl('', []),
     // description: new FormControl('', []),
      logo: new FormControl('', [])
    });


  }
  logo;


  selectImage($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.logo = myReader.result;
      console.log(this.logo)


    }
    myReader.readAsDataURL(file);

  }
  letterOnly(event): Boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }



  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    
  

    if (this.id) {
      this.getCompanyById();
      /*this.getCompanyAdmins();*/
    }

  }

  getCompanyById() {
    this.editMode = true;
    this.companiesService.getCompanyById(this.id).subscribe(
      (value: any) => {
        /*this.companyQrCode = value.code;*/
        console.log("---------- "+JSON.stringify(value))
        this.addForm.patchValue(value);
      }, err => {
        console.log(err)
      }
    )
  }

  /* getCompanyAdmins(){
    this.companiesService.getCompanyAdmins(this.id).subscribe(
      (data:any)=>{
        this.admins=data;
      },err=>{
        console.log(err)
      }
    )
  } */

  get formvalidate() {
    return this.addForm.controls;
  }

  onSubmit() {
    console.log("************ "+this.addForm.valid+" "+this.submitted +this.id)
    let JsonCompany = {
      "name": this.addForm.value.name,
      "category": this.addForm.value.category,
      "country": this.addForm.value.country,
      "email": this.addForm.value.email,
      "city": this.addForm.value.city,
      "zip_code": this.addForm.value.zip_code,
      "adress": this.addForm.value.adress,
      "country_code": this.addForm.value.country_code,
      "phone": this.addForm.value.phone,
      "logo": this.logo


    }
    console.log(JsonCompany)

    if (this.id) {
      this.submitted = true;
      if (this.addForm.valid) {
        this.valid = true;
        this.companiesService.updateCompany(this.id, JsonCompany).subscribe(
          data => {
            alert("company updated successfully")
            this.router.navigate(['pages/companies'])
          }
        )
      }
    } else {
      this.submitted = true;
      if (this.addForm.valid) {
        this.valid = true;
        this.companiesService.addCompany(JsonCompany).subscribe(
          companyId => {
            var obj = { email: this.addForm.value.email, password: "123456" }
            this.register(obj);
          }, err => {
            console.log(err);
          }
        )
      }
    }
  }


  register(campanyContact) {
    this.authService.registerUser(campanyContact).subscribe(
      data => {
        alert("Company created successfully")
        this.router.navigate(['pages/companies'])
      },
      err => {
        console.log("error " + err);
      })
  }


  /* createAdmin(){
    console.log("createAdmin");
    this.router.navigate(['pages/company/',this.id,'create-admin']);
  } */


  /* updateAdmin(admin:any):void{
    this.router.navigate(['pages/company/',this.id,'create-admin',admin.id]);
  } */


  /* deleteAdminByid(admin:any):void {
    if(confirm("Are you sure you want to delete this Admin?")) {
      this.companiesService.deleteAdminByid(this.id,admin.id).subscribe(
        data=>{
          if(data=="success"){
            this.admins=this.admins.filter(r=>r !==admin)
            alert("Admin deleted successfully");
          }else{
            alert("You could not delete Admin ");

          }
          this.router.navigate(['pages/company/',this.id,'edit']);

        },err =>{
          console.log(err);
        }
      )}
  }; */

}


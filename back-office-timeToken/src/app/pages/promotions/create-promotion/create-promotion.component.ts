
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { PromotionsService } from "../promotions.service";
import { CompaniesService } from '../../companies/companies.service';
import { ThreeColumnsLayoutComponent } from '../../../@theme/layouts';


@Component({
  selector: 'create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss']
})
export class CreatePromotionComponent implements OnInit {
  id: any;
  editMode = false;
  addForm: FormGroup;
  submitted = false;
  valid = false;
  companies = [];
  minDate = new Date();
  images;
  Category: "";
  input = "";
  code: string;
  promotion:any;
  expirationDate:any;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private promotionsService: PromotionsService,
    private activateRouter: ActivatedRoute,
    private companiesService: CompaniesService) {

    this.addForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      Category: new FormControl('', [Validators.required]),
      id_company: new FormControl('', [Validators.required]),
      expiration_date: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      image: new FormControl('', []),

    });


  }


  chooseCategory(cat) {
    console.log("catttttttt" + cat)
  }

  selectImage($event): void {
    this.readThis($event.target);

  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = () => {
      this.images = myReader.result;


    }
    myReader.readAsDataURL(file);

  }


  /* letterOnly(event): Boolean {
     const charCode = (event.which) ? event.which : event.keyCode;
     if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
       return false;
     }
     return true;
   }*/




  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    if (this.id) {
      this.getPromotionById();
    }

    this.getCompanies(this.input);
  }


  getCompanies(filter) {
    this.companiesService.getAllCompanies(filter).subscribe(
      (data: any) => { this.companies = data }, err => {
        console.log(err)
      }
    )
  }

  getPromotionById() {
    this.editMode = true;
    this.promotionsService.getPromotionDetailsById(this.id).subscribe(
      (value: any) => {
        console.log("promo "+JSON.stringify(value));

        this.promotion={
          name: value.promotion_name,
          Category: value.promotion_category,
          id_company: value.company_id,
          expiration_date: value.expiration_date,
          description: value.promotion_description,
          cost: value.cost,
          discount: value.discount,
          image: value.image
        };

        this.expirationDate=this.promotion.expiration_date;
        
        this.addForm.patchValue(this.promotion);

        this.code = value.code;
      }, (err: any) => {
        console.log(err)
      }
    )
  }


  /*getCompanyAdmins(){
    this.promotionsService.getCompanyAdmins(this.id).subscribe(
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

    console.log(this.addForm.value.Category);

    console.log("************ " + this.addForm.valid + " " + this.submitted + this.id)
    let JsonPromotion = {
      "name": this.addForm.value.name,
      "category": this.addForm.value.Category,
      "id_company": this.addForm.value.id_company,
      "expiration_date": this.addForm.value.expiration_date,
      "description": this.addForm.value.description,
      "cost": this.addForm.value.cost,
      "discount": this.addForm.value.discount,
      "image": this.images



    }
    console.log(JsonPromotion)
    if (this.id) {

      if (this.addForm.valid) {
        this.valid = true;
        this.promotionsService.updatePromotion(this.id, JsonPromotion).subscribe(
          (response) => {
            
            alert("Promotion updated successfully")
            this.router.navigate(['pages/promotions'])
          }
        )
      }
    } else {
      this.submitted = true;
      if (this.addForm.valid) {
        this.valid = true;
        this.promotionsService.createPromotion(JsonPromotion).subscribe(
          (response:any) => {
            console.log("777777"+response.msg)
            if(JSON.parse(response).msg === "success"){
              this.promotionsService.getPromotionDetailsById(JSON.parse(response).ID).subscribe(
                (promotion: any) => {
                  this.code=promotion.code
                  alert("This is the promo code for the promotion, "+"[" + this.code +"]"+ " .Make sure to add this to your checkout if your store is online successfully")
                  this.router.navigate(['pages/promotions'])
                }
              )
            }else{
              alert("Failed to create Promotion, please check the data you entered")
                 
            }
            
          }, err => {
            console.log(err);
          }
        )
      }
    }
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
      this.promotionsService.deleteAdminByid(this.id,admin.id).subscribe(
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


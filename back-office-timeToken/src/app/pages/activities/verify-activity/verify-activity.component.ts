import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivitiesService } from '../activities.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './verify-activity.component.html',
  styleUrls: ['./verify-activity.component.scss']
})
export class VerifyActivityComponent implements OnInit {
  id:number;
  verifyForm:FormGroup;
  imagePath:String;
  submitted = false;
  valid=false;

  constructor(private formBuilder: FormBuilder,
              private activitiesService:ActivitiesService,
              private dialogRef: MatDialogRef<VerifyActivityComponent>,
              @Inject(MAT_DIALOG_DATA) data ) {
    this.id = data.id;
    this.verifyForm=this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      category:new FormControl('',[Validators.required]),
      value:new FormControl('',[Validators.required]),
    });             
   }



  ngOnInit() {
   this.getActivityById(this.id);
  }

  getActivityById(id:any) {
    this.activitiesService.getActivityById(id).subscribe(
      (data:any)=>{this.imagePath=data.image;},err=>{
        console.log(err)
      }
    )
  }

  onSubmit() {
    this.submitted=true;
    if(this.verifyForm.valid){
       var details={
        id:this.id,
        name:this.verifyForm.value.name,
        category:this.verifyForm.value.category,
        value:this.verifyForm.value.value
      } 
      console.log(details);
      this.activitiesService.verifyActivity(details).subscribe(
        response=>{
          alert("activity verified successfully")
          window.location.reload();
        },err=>{
          console.log(err);
        }  

      );
    }
    }
  

  onClose() {
    this.dialogRef.close();
    console.log("on close triggered");
  }

}
import { Component, OnInit, Inject } from '@angular/core';

import { ActivitiesService } from '../activities.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VerifyActivityComponent } from '../verify-activity/verify-activity.component';

@Component({
  selector: 'details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.scss']
})
export class DetailsActivityComponent implements OnInit {

  id:number;
  activity:any;
  submitted = false;
  valid=false;

  constructor(private activitiesService:ActivitiesService,
              private dialogRef: MatDialogRef<VerifyActivityComponent>,
              @Inject(MAT_DIALOG_DATA) data ) {
    this.id = data.id;
        
   }



  ngOnInit() {
   this.getActivityById(this.id);
  }

  getActivityById(id:any) {
    this.activitiesService.getActivityById(id).subscribe(
      (data:any)=>{this.activity=data;},err=>{
        console.log(err)
      }
    )
  }

  onClose() {
    this.dialogRef.close();
  }

}

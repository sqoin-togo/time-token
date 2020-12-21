import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { MatDialog, MatDialogConfig } from "@angular/material"
import { VerifyActivityComponent } from './verify-activity/verify-activity.component';
import { DetailsActivityComponent } from './details-activity/details-activity.component';
@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  id: number;
  activities = [];
  pageActuel: number = 1;
  dataTable: any;
  public selectedVal: string;
  err: number;
  filter: ""="";

  constructor(private router: Router, private activateRouter: ActivatedRoute,
    private activitiesService: ActivitiesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    this.getAllActivities(this.filter);
  }
  searchActivities(input) {

    this.activitiesService.getActivitiesDetails(input).subscribe(
      data => {
        this.activities = data;

      }, err => {
        console.log(err);
      })
  }

  getAllActivities(input) {
    this.activitiesService.getActivitiesDetails(input).subscribe(
      data => {
        this.activities = data;
      }, err => {
        console.log(err);
      })
  }

  verify(activityId: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { id: activityId };
    this.dialog.open(VerifyActivityComponent, dialogConfig);
  }

  details(activityId: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { id: activityId };
    this.dialog.open(DetailsActivityComponent, dialogConfig);
  }

  delete(activityId: any) {
    if (confirm("are you sure you want to delete activity n°" + activityId))
      this.activitiesService.deleteActivity(activityId).subscribe(
        data => {
          window.location.reload();
        }, err => {
          console.log(err);
        }
      );
  }


}
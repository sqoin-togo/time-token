import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  totalUsers:any;
  totalAdmins:any;
  totalTransactions:any;
  totalPromotions:any;
  totalActivities:any;
  totalCompanies:any;
  //weeklyScreeningCount:any;
  //dailyScreening:any;
  //passResultsCount:any;
 // passwithRestrictionCount:any;
  //furtherActionRequiredCount:any;
 // usersPassigTestsCount:any;

  constructor( private router:Router,private homeService:HomeService) { }

  ngOnInit() {
    this.getUsersCount();
    this.getAdminsCount();
    this.getCompaniesCount();
    this.getTransactionsCount();
    this.getPromotionsCount();
    this.getActivitiesCount();
  }

  getUsersCount(){
    this.homeService.getUsersCount().subscribe(
      (data:any)=>{
        this.totalUsers=data.number;
      },
      err=>{console.log("error "+err);}
    )
  }

  getAdminsCount(){
    this.homeService.getAdminsCount().subscribe(
      (data:any)=>{
        this.totalAdmins=data.number;
      },
      err=>{console.log("error "+err);}
    )
  }

  getCompaniesCount(){
    this.homeService.getCompaniesCount().subscribe(
      (data:any)=>{
        this.totalCompanies=data.number;
      },
      err=>{console.log("error "+err);}
    )
  }

  getTransactionsCount(){
    this.homeService.getTransactionsCount().subscribe(
      (data:any)=>{
        this.totalTransactions=data.number;
      },
      err=>{console.log("error "+err);}
    )
  }

  getPromotionsCount(){
    this.homeService.getPromotionsCount().subscribe(
      (data:any)=>{
        this.totalPromotions=data.number;
      },
      err=>{console.log("error "+err);}
    )
  }

  getActivitiesCount(){
    this.homeService.getActivitiesCount().subscribe(
      (data:any)=>{
        this.totalActivities=data.number;
      },
      err=>{console.log("error "+err);}
    )
  }
  
   goToUserManagePage(){
    this.router.navigate(['pages/users'])
  }

  goToCompaniesManagePage(){
    this.router.navigate(['pages/companies'])
  }

  goToPromotionsManagePage(){
    this.router.navigate(['pages/promotions'])

  }

}

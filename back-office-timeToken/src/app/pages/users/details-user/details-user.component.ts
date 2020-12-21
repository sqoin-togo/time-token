import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {
  pageActuel: number =1;
  id:number;
  user:any={};
  information:any;
  inTransactions:any;
  outTransactions:any;
  constructor(private router:Router, private userService: UserService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    this.getUserById(this.id);
    this.getUserInformation(this.id);
    this.getInTransactionsByUserId(this.id);
    this.getOutTransactionsByUserId(this.id);
  }

  getInTransactionsByUserId(id: number) {
    this.userService.getInTrasactionsByUserId(id).subscribe(
      data=>{
        this.inTransactions=data;
      },
      err=>{
        console.log(err);
      }
    );
  }

  getOutTransactionsByUserId(id: number) {
    this.userService.getOutTrasactionsByUserId(id).subscribe(
      data=>{
        this.outTransactions=data;
      },
      err=>{
        console.log(err);
      }
    );
  }

  getUserInformation(id: number) {
    this.userService.getUserInformation(id).subscribe(
      data=>{
        console.log(data);
        this.information=data[0];
        
      },
      error=>{
        console.log("error "+error);
      }
    )
  }

  
 
  getUserById(userId:number){
    this.userService.getUserById(userId).subscribe(
      data=>{      
        this.user=data;
      },
      error=>{
        console.log("error "+error);
      });
  }


  goManageUsers(){
    this.router.navigate(['pages/users'])
  }

}

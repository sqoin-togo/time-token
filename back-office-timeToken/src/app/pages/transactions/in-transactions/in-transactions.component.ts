import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'in-transactions',
  templateUrl: './in-transactions.component.html',
  styleUrls: ['./in-transactions.component.scss']
})
export class InTransactionsComponent implements OnInit {
  transactions:any=[];
  dataTable: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public selectedVal: string;
  err:number;
  
  constructor(private transactionsService:TransactionsService,private router:Router,private activateRouter:ActivatedRoute) { };

  ngOnInit() {
    this.getAllInTransactions();
  }
  
  getAllInTransactions() {
    this.transactionsService.getTransactionsByType("in").subscribe(
      data=>{
        console.log(data);
        this.transactions=data;
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      })
  }

  goDetailsUser(){
    this.router.navigate(['/pages/users']);
  }

  goDetailsActivity(){
    this.router.navigate(['/pages/activities']);
  }

  goDetails

  delete(transactionId :any){
    console.log(transactionId);
     this.transactionsService.deleteTransaction(transactionId).subscribe(
      data=>{
        window.location.reload();
      },err=>{
        console.log(err);
      }
     ); 
  }
  }


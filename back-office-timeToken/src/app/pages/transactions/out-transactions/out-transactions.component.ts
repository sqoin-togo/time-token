import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'out-transactions',
  templateUrl: './out-transactions.component.html',
  styleUrls: ['./out-transactions.component.scss']
})
export class OutTransactionsComponent implements OnInit {
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
    this.transactionsService.getTransactionsByType("out").subscribe(
      data=>{
        console.log(data);
        this.transactions=data;
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      })
  }

  goDetailsUsers(){
    this.router.navigate(['/pages/users']);
  }

  goDetailsPromotions(){
    this.router.navigate(['/pages/promotions']);
  }

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


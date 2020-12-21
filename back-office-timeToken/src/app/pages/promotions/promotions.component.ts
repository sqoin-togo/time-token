import { Component, OnInit } from '@angular/core';
import { Promotion } from './promotion.model';
import { PromotionsService } from './promotions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DetailsPromotionComponent } from './details-promotion/details-promotion.component';

@Component({
  selector: 'promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  status='Pending';
  promotions:any=[];
  availableOnly:boolean=false;
  id :any;
  dataTable: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isAvailable = false;
  public selectedVal: string;
  err:number;
  map: any;
  input : any;
  constructor(private promotionsService:PromotionsService,private router:Router,private activateRouter:ActivatedRoute,private dialog:MatDialog) { };
  
  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'];
    this.getPromotionsDetails(this.promotions);
    this.isAvailable = false;
  }
  searchPromotions(input){

    this.promotionsService.getPromotionsDetails(input).subscribe(
      data=>{
        this.promotions=data;
        ((promotion:any) => {
          this.map.set(promotion.id)
        });
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      })
}
  
  getPromotionsDetails(input) {
    this.promotionsService.getPromotionsDetails(input).subscribe(
      (data:any)=>{
        this.promotions=data;
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      })
  }

  verifyPromotion(promotionId :any){
    if(confirm("êtes-vous sûr de vouloir verifier la promotion "+promotionId+" "+" ?" )){
     this.promotionsService.verifyPromotion(promotionId).subscribe(
      data=>{
        window.location.reload();
      },err=>{
        console.log(err);
      }); }
  }

  toggleAvailability(){
    this.availableOnly=!this.availableOnly;
  }

  delete(promotionId :any){
    console.log(promotionId);
     this.promotionsService.deletePromotion(promotionId).subscribe(
      data=>{
        window.location.reload();
      },err=>{
        console.log(err);
      }
     ); 
  }

  create(){
    this.router.navigate(['/pages/promotions/create']);
  }

  update(promotionId:any){
    this.router.navigate(['pages/promotions',promotionId,'edit'])
  } 

  goDetailsPromotion(promotionId:number){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data={id:promotionId};
    this.dialog.open(DetailsPromotionComponent,dialogConfig);
  }
  }


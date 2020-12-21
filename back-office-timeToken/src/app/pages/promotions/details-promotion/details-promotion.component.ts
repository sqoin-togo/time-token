import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PromotionsService } from '../promotions.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'details-promotion',
  templateUrl: './details-promotion.component.html',
  styleUrls: ['./details-promotion.component.scss']
})
export class DetailsPromotionComponent implements OnInit {
  promotion:any;
  id:number;

  constructor(
    private router:Router,
    private promotionsService:PromotionsService,
    private activateRoute:ActivatedRoute,
    private dialogRef: MatDialogRef<DetailsPromotionComponent>,
    @Inject(MAT_DIALOG_DATA) data ) { this.id = data.id; }

  ngOnInit() {
    this.getPromotionDetails(this.id);
  }

  getPromotionDetails(promotionId: number) {
    this.promotionsService.getPromotionDetailsById(promotionId).subscribe(
      data=>{
        console.log("PromotionDetails:",data);      
        this.promotion=data;
      },
      error=>{
        console.log("error"+error);
      }
    )
  }

  goManagePromotions(){
 this.router.navigate(['/pages/promotions']);
  }

}

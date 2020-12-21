import { Component, OnInit } from '@angular/core';
import { Promotion } from '../../promotions/promotion.model';
import { Company } from '../company.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { PromotionsService } from '../../promotions/promotions.service';

@Component({
  selector: 'details-company',
  templateUrl: './details-company.component.html',
  styleUrls: ['./details-company.component.scss']
})
export class DetailsCompanyComponent implements OnInit {

  isButtonVisible = true;
  company: Company;
  promotions: Promotion[] = [];
  id: number;
  idUserKey: number;
  publicKey: 'according not exist';
  isDisabled = false;

  disableButton() {
    this.isDisabled = true;
    // your code...
  }


  constructor(private router: Router, private companyService: CompaniesService, private promotionsService: PromotionsService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getCompanyById(this.id);
    this.getPromotionsByCompanyId(this.id)

  }
  getuserIdByEmail(email: string) {
    //console.log(" ligne 29 " + email)
    this.companyService.getuserIdByEmail(email).subscribe(
      data => {
        console.log("userIdByEmail:", data.id);
        this.idUserKey = data.id;
        this.getPublicAddressByUserId(data.id)
      },
      error => {
        console.log("error" + error);
      }
    )
  }


  getPublicAddressByUserId(id: number) {
    //console.log(" ligne 29 " + email)
    this.companyService.getPublicAddressByUserId(id).subscribe(
      data => {
        console.log(" getPublicAddress: ", data);
        console.log(" getPublicAddress: ", data.publickey);
        this.publicKey = data.publickey;
        if (data.publickey === 'according not exist') {
          this.isButtonVisible = true
        }
        else {
          this.isButtonVisible = false
        }
      },
      error => {
        console.log("error" + error);
      }
    )
  }
  getCompanyById(companyId: number) {
    this.companyService.getCompanyById(companyId).subscribe(
      data => {
        console.log("company:", data);
        this.company = data;
        //console.log(' email company ' + this.company.email)
        this.getuserIdByEmail(this.company.email)
      },
      error => {
        console.log("error" + error);
      }
    )
  }


  getPromotionsByCompanyId(companyId: number) {
    this.promotionsService.getPromotionsByCompanyId(companyId).subscribe(
      data => {
        console.log("promotions :", data);
        this.promotions = data;
      },
      error => {
        console.log("error " + error);
      });
  }

  goManageCompanies() {
    this.router.navigate(['/pages/companies']);
  }

  goDetailsPromotion(promotionId: number) {
    this.router.navigate(['pages/promotions', promotionId, 'details']);
  }

  delete(promotionId: any) {
    console.log(promotionId);
    this.promotionsService.deletePromotion(promotionId).subscribe(
      data => {
        window.location.reload();
      }, err => {
        console.log(err);
      }
    );
  }

  update(promotionId: any) {
    this.router.navigate(['pages/promotions', promotionId, 'edit'])
  }

  clickEvent() {

    console.log("Save button is clicked!");
    //this.isButtonVisible = false;
    let pravitekey = {
      "coin": "SAGE",
      "userId": this.idUserKey,
      "pin": "123"
    }
    this.companyService._PrivateKey(pravitekey).subscribe(
      (data: any) => {
        this.publicKey = data
        this.isButtonVisible = false
        alert("company updated successfully")
        this.router.navigate(['pages/companies'])
      }
    )
  }

  onSave($event) {
    console.log("Save button is clicked!", $event);
  }
  onDivClick() {
    console.log("DIV is clicked!");
  }

}

import { Component, OnInit } from '@angular/core';
import { Company } from './company.model';
import { Router } from '@angular/router';
import { CompaniesModule } from './companies.module';
import { CompaniesService } from './companies.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})


export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  pageActuel: number = 1;
  dataTable: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isAvailable = false;
  public selectedVal: string;
  err: number;
  input = "";


  constructor(private router: Router,
    private companiesService: CompaniesService) { }

  ngOnInit() {
    this.selectedVal = 'Active';
    this.isAvailable = false;
    this.getAllCompanies(this.input);
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }
  searchCompanies(input){

    this.companiesService.getAllCompanies(input).subscribe(
      data=>{
        this.companies=data;
        
        this.dtTrigger.next();
      },err=>{
        console.log(err);
      })
}

  getAllCompanies(input) {
    this.companiesService.getAllCompanies(input).subscribe(
      data => {
        this.companies = data;
        this.dtTrigger.next();
      }, err => {
        console.log(err);
      })
  }



  delete(company: Company): void {
    if (confirm("are you sure you want to delete this company :" + company.name + " ?")) {
      this.companiesService.deleteCompany(company.id).subscribe(
        data => {
          window.location.reload();
        }, err => {
          console.log(err);
        }
      )
    };
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  viewPage(companyID: any) {
    this.router.navigate(['pages/companies', companyID, 'details']);
  }

  create(): void {
    this.router.navigate(['/pages/companies/create']);
  }

  edit(company: Company) {
    this.router.navigate(['pages/companies', company.id, 'edit'])
  }

  ShowPromotions(company: Company) {
    this.router.navigate(["pages/companies/", company.id, "promotions"]);
  }
}


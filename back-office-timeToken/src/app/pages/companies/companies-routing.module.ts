import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { DetailsCompanyComponent } from './details-company/details-company.component';

const routes: Routes = [{
  path: '',
  component: CompaniesComponent,  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule { }

export const routedComponents = [
  CompaniesComponent,
];

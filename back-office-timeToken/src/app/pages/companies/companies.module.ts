import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CompaniesRoutingModule, routedComponents } from './companies-routing.module';
import { DetailsCompanyComponent } from './details-company/details-company.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatListModule} from '@angular/material/list';
import { CreatecompanyComponent } from './create-company/create-company.component';


@NgModule({
  imports: [
    ThemeModule,
    CompaniesRoutingModule,
    NgxPaginationModule ,
    MatListModule,
  ],
  declarations: [
    ...routedComponents,
    DetailsCompanyComponent,
    CreatecompanyComponent,
  ],
})
export class CompaniesModule { 
  
}




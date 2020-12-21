import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { UserModule } from './users/user.module';
import { MyAccountModule } from './my-account/my-account.module';
import { HomeModule } from './home/home.module';
import { HelpModule } from './help-center/help-center.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CompaniesModule } from './companies/companies.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionsModule } from './promotions/promotions.module';
import { DetailsActivityComponent } from './activities/details-activity/details-activity.component';
import { ActivitiesModule } from './activities/activities.module';
import { InTransactionsComponent } from './transactions/in-transactions/in-transactions.component';
import { OutTransactionsComponent } from './transactions/out-transactions/out-transactions.component';
import { TransactionsModule } from './transactions/transactions.module';



const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
  
    UserModule, 
   
    MyAccountModule,
   
    CompaniesModule,
    PromotionsModule,
    ActivitiesModule,
    HomeModule,
    HelpModule,
    TransactionsModule,
    DragDropModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDatepickerModule
    

  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}

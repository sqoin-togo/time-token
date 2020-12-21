import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { UserComponent } from './users/user.component';

import { AuthGuard } from "./auth/auth.guard";

import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";

import { DetailsUserComponent } from './users/details-user/details-user.component';

import { MyAccountComponent } from './my-account/my-account.component';


import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help-center/help-center.component';


import { AdminsComponent } from './users/admins/admins.component';
import { CompaniesComponent } from './companies/companies.component';
import { DetailsCompanyComponent } from './companies/details-company/details-company.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { DetailsPromotionComponent } from './promotions/details-promotion/details-promotion.component';
import { CreatecompanyComponent } from './companies/create-company/create-company.component';
import { CreatePromotionComponent } from './promotions/create-promotion/create-promotion.component';
import { ActivitiesComponent } from './activities/activities.component';
import { InTransactionsComponent } from './transactions/in-transactions/in-transactions.component';
import { OutTransactionsComponent } from './transactions/out-transactions/out-transactions.component';




const routes: Routes = [{
  path: '',
  component: PagesComponent, canActivate: [AuthGuard],
  children: [{
      path: 'home',
      component: HomeComponent, canActivate: [AuthGuard],
    },
    {
      path: 'users',
      component: UserComponent, canActivate: [AuthGuard],
    },
    {
      path: "user/:id/details",
      component: DetailsUserComponent, canActivate: [AuthGuard],
    }, 
    {
      path: 'admins',
      component: AdminsComponent, canActivate: [AuthGuard],
    },
    {
      path: 'companies',
      component: CompaniesComponent, canActivate: [AuthGuard],
    },
    {
      path: "companies/:id/details",
      component: DetailsCompanyComponent, canActivate: [AuthGuard],
    },
    {
      path:"companies/:id/edit",
      component:CreatecompanyComponent,canActivate:[AuthGuard],
    },
    {
      path:"companies/create",
      component:CreatecompanyComponent,canActivate:[AuthGuard],
    },
    {
      path:"promotions",
      component: PromotionsComponent , canActivate:[AuthGuard],
    },
    {
      path:"promotions/:id/edit",
      component:CreatePromotionComponent,canActivate:[AuthGuard],
    },
    {
      path:"promotions/create",
      component:CreatePromotionComponent,canActivate:[AuthGuard],
    },
    {
      path:"promotions/:id/details",
      component : DetailsPromotionComponent , canActivate:[AuthGuard],
    },
    {
      path:"activities",
      component: ActivitiesComponent,canActivate:[AuthGuard],
    },
    {
      path:"transactions/in-transactions",
      component: InTransactionsComponent,canActivate:[AuthGuard],
    },
    {
      path:"transactions/out-transactions",
      component: OutTransactionsComponent,canActivate:[AuthGuard],
    },
    {
      path: "myAccount",
      component: MyAccountComponent, canActivate: [AuthGuard],
    },
    {
      path: 'help-center',
      component: HelpComponent, canActivate: [AuthGuard],
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

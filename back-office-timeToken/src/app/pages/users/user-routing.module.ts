import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DetailsUserComponent } from './details-user/details-user.component';



const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'info',
      component: DetailsUserComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CommercialRoutingModule {

}

export const routedComponents = [
  UserComponent,
  DetailsUserComponent,
];

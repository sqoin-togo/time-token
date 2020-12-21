import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from './activities.component';
import { DetailsActivityComponent } from './details-activity/details-activity.component';

const routes: Routes = [{
  path: '',
  component: ActivitiesComponent,  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule { }

export const routedComponents = [
    ActivitiesComponent,
    DetailsActivityComponent
];

import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { UserComponent } from './user.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DetailsUserComponent } from './details-user/details-user.component';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AdminsComponent } from './admins/admins.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    FormsModule,
    DataTablesModule,
    AngularMultiSelectModule,
    TranslateModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
    UserComponent,
    AdminsComponent,
    DetailsUserComponent
  ]

})
export class UserModule { }

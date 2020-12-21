import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {TranslateModule} from "@ngx-translate/core";
import { MyAccountComponent } from './my-account.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    TranslateModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
    MyAccountComponent,
  ],
})
export class MyAccountModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "../../@theme/theme.module";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {HelpComponent} from "./help-center.component";
import {BsDatepickerModule} from "ngx-bootstrap";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    TranslateModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot()
  ]
})
export class HelpModule { }

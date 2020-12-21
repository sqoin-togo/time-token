import { NgModule } from "@angular/core";
import { InTransactionsComponent } from "./in-transactions/in-transactions.component";
import { OutTransactionsComponent } from "./out-transactions/out-transactions.component";
import { ThemeModule } from '../../@theme/theme.module';
import { NgxPaginationModule } from "ngx-pagination";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialogModule } from "@angular/material";



@NgModule({
    imports:[
        ThemeModule,
        NgxPaginationModule,
        MatSlideToggleModule,
        MatDialogModule
    ],
    declarations:[
        InTransactionsComponent,
        OutTransactionsComponent
    ]
})

export class TransactionsModule{ }





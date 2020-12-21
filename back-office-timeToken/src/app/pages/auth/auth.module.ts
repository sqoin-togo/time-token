import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';


import { FormsModule } from '@angular/forms';
import {AuthComponent} from "./login/auth.component";
import {RegisterComponent} from "./register/register.component";
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { NbAuthComponent } from './authentification.components';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { NbLayoutModule, NbCardModule, NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { ResetComponent } from './reset/reset.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    RouterModule,

  ],
  declarations: [
    NbAuthComponent,
    AuthBlockComponent,
    AuthComponent,
    RegisterComponent,
    EmailValidationComponent,
    PrivacyComponent,
    LogoutComponent,
    ResetComponent

  ],
})
export class AuthModule {


}

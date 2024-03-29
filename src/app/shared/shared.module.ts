import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomMsgComponent } from './welcom-msg/welcom-msg.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { matchPasswordsValidator } from './utils/match-passwords-validator';
import { emailValidator } from './utils/email-validator';


@NgModule({
  declarations: [LoaderComponent, WelcomMsgComponent, EmailDirective],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomMsgComponent, EmailDirective],
})
export class SharedModule {}

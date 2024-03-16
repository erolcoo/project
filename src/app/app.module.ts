import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportCarsComponent } from './sport-cars/sport-cars.component';
import { SuvCarsComponent } from './suv-cars/suv-cars.component';
import { HybridCarsComponent } from './hybrid-cars/hybrid-cars.component';
import { SpecificationComponent } from './specification/specification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SharedModule } from './shared/shared.module';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { RedirectSportsCarComponent } from './redirect-sports-car/redirect-sports-car.component';
import { RedirectSuvCarComponent } from './redirect-suv-car/redirect-suv-car.component';
import { RedirectHybridCarComponent } from './redirect-hybrid-car/redirect-hybrid-car.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportCarsComponent,
    SuvCarsComponent,
    HybridCarsComponent,
    SpecificationComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    MyComponentComponent,
    WelcomePageComponent,
    DeleteAccountComponent,
    RedirectSportsCarComponent,
    RedirectSuvCarComponent,
    RedirectHybridCarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,SharedModule,ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

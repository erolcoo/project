import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SportsgarageComponent } from './sportsgarage/sportsgarage.component';



@NgModule({
  declarations: [
    HomeComponent,
    SportsgarageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,SportsgarageComponent],
})
export class CoreModule { }

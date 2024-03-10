import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SportsgarageComponent } from './core/sportsgarage/sportsgarage.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'sportgarage', component: SportsgarageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

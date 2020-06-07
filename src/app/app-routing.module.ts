import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// lazy routes


const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HighlightCardComponent } from 'src/app/components/highlight-card/highlight-card.component';



@NgModule({
  declarations: [DashboardComponent, HighlightCardComponent],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }

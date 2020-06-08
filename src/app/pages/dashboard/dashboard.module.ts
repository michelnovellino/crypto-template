import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HighlightCardComponent } from 'src/app/components/highlight-card/highlight-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from 'src/app/components/list/list.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class DashboardModule { }

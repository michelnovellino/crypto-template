import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    HighlightCardComponent,
    ListComponent
  ],
  exports:[
    HighlightCardComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

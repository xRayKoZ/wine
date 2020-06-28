import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineCardComponent } from './components/wine-card/wine-card.component';

@NgModule({
  declarations: [WineCardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    WineCardComponent,
    RouterModule
  ]
})
export class SharedModule { }

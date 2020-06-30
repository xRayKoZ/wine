import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineCardComponent } from './components/wine-card/wine-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [WineCardComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    WineCardComponent,
    LoaderComponent,
    RouterModule
  ]
})
export class SharedModule { }

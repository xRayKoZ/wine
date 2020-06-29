import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { WineDetailComponent } from './pages/wine-detail/wine-detail.component';


@NgModule({
  declarations: [HomeComponent, WineDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

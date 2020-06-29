import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WineDetailResolver } from './resolver/wine-detail-resolver.service';

import { WineDetailComponent } from './pages/wine-detail/wine-detail.component';
import { HomeComponent } from './pages/home/home.component';

const HomeRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'vin/:wine',
    component: WineDetailComponent,
    resolve: {
      wine: WineDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
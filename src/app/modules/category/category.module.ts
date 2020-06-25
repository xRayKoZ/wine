import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from './../../shared/shared/shared.module';

import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './pages/category/category.component';

const CategoryRoutes: Routes = [
  { path: ':cat', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(CategoryRoutes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
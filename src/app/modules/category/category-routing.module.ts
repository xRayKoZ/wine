import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryResolver } from './resolver/category-resolver.service';

import { CategoryComponent } from './pages/category/category.component';

const CategoryRoutes: Routes = [
  {
    path: ':cat',
    component: CategoryComponent,
    resolve: {
      category: CategoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(CategoryRoutes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
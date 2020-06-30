import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './layout/container/container.component';

const routes: Routes = [
  { path: 'home', redirectTo: ''},
  { path: '', component: ContainerComponent, children: [
      {
        path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'categorie', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
      }
    ]
  },
  { 
    path: '**', loadChildren: () =>
    import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

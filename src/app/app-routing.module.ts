import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'base',
    component: BaseComponent,
    children: [
      {
        path: 'main/:id',
        component: MainComponent,
        children: [
          {
            path: 'detail/:subId',
            component: DetailComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

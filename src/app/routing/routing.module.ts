import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import { FruitListComponent } from '../fruit-list/fruit-list.component';
import { NamesComponent } from '../names/names.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FruitDetailComponent } from '../fruit-detail/fruit-detail.component';
import { FruitsService } from "../fruits.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'names',
    component: NamesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'fruit/:id',
    component: FruitDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }

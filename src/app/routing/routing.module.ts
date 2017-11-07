import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import { FruitListComponent } from '../fruit-list/fruit-list.component';
import { NamesComponent } from '../names/names.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FruitDetailComponent } from '../fruit-detail/fruit-detail.component';
import { FruitsService } from "../fruits.service";
import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueDetailComponent } from "../issue-detail/issue-detail.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'issues',
    component: IssueListComponent,
    children: [
      {
        path: ':id',
        component: IssueDetailComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'issues/add',
    component: IssueFormComponent
  },
  {
    path: 'issue-detail/:id',
    component: IssueDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }

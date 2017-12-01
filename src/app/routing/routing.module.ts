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
import { IssueEditComponent } from "../issue-edit/issue-edit.component";
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'issues/new',
    component:  IssueEditComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }

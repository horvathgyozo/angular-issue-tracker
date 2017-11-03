import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
      MatFormFieldModule, MatInputModule,
      MatButtonToggleModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { NamesComponent } from './names/names.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsService } from "./fruits.service";
import { IssueListComponent } from './issue-list/issue-list.component';

import { RoutingModule } from "./routing/routing.module";
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    NamesComponent,
    DashboardComponent,
    FruitDetailComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    StatusFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    FormsModule
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

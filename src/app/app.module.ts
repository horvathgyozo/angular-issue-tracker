import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
      MatFormFieldModule, MatInputModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { NamesComponent } from './names/names.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsService } from "./fruits.service";

import { RoutingModule } from "./routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    NamesComponent,
    DashboardComponent,
    FruitDetailComponent
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
    FlexLayoutModule
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

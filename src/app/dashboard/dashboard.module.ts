import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    HomePageComponent,
    BoardComponent,
  ],
})
export class DashboardModule { }

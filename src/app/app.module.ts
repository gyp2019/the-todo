import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

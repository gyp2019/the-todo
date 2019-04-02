import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'board', component: BoardComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DashboardRoutingModule { }

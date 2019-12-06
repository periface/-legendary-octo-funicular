import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class MainRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/modules/material.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent
  ],
  imports: [MainRoutingModule, CommonModule, MaterialModule, FlexLayoutModule]
})
export class MainModule {}

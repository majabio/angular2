import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{MainWindowComponent} from './main-window.component';
import{MapComponent} from '../map/map.component'; 

const mainwindowRoutes: Routes = [
  { path: ':username',  component: MainWindowComponent, 
   children: [
            {
                path: '',
                component: MapComponent
            }
]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(mainwindowRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainWindowRoutingModule { }
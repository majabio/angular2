import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import {MainWindowRoutingModule} from './main-window-routing.module';

import {MainWindowComponent} from './main-window.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ,
                  HttpModule,
                  MainWindowRoutingModule
                ],
  declarations: [ MainWindowComponent
                 //HeroDetailComponent,
                 //DashboardComponent ]
  ],
  //providers:    [SignupService]
})



export class MainWindowModule { }



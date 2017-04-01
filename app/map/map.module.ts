import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {MapComponent} from './map.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ,
                  HttpModule,
                  AgmCoreModule
                ],
  declarations: [ MapComponent
                 //HeroDetailComponent,
                 //DashboardComponent ]
  ],
  //providers:    [SignupService]
})

export class MapModule {

 }


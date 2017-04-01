import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; //json module no necessary for http rqsts, but was in demo
import { AppRoutingModule }     from './app-routing.module';
import {MainWindowModule}   from './main-window/main-window.module';
import {MapModule} from './map/map.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent }   from './app.component';
import {LoginComponent} from './login.component';
import {SignupComponent} from './signup.component';

//import {SignupService} from  './signup.service'



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ,
                  AppRoutingModule,
                  HttpModule,
                  MainWindowModule,
                  MapModule,
                  AgmCoreModule.forRoot({ apiKey: 'AIzaSyBQfuwXlW0vC6fw9Ur6fHu9xrAfqQk3oow'})
                ],
  declarations: [ AppComponent,
                  LoginComponent,
                  SignupComponent
                 //HeroDetailComponent,
                 //DashboardComponent ]
  ],
  bootstrap:    [ AppComponent ], 
  //providers:    [SignupService]
})



export class AppModule { }

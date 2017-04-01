import {Component} from '@angular/core';
import {SebmGoogleMap, SebmGoogleMapMarker} from 'angular2-google-maps/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FetchAllMessagesService} from './fetch-all-messages.service'

@Component({
moduleId : module.id,
selector : 'map',
templateUrl: 'map.component.html',
styleUrls: ['map.component.css'],
providers: [FetchAllMessagesService]
})

export class MapComponent implements OnInit {
  lat: number = 45.81;
  lng: number = 15.98;
  zoom: number = 15;
  title:string;
  messageArray : any[];
  constructor(private fetchAllMessagesService: FetchAllMessagesService) { }

  fetchAllMessages() : void {
        this.fetchAllMessagesService
        .fetchAllMessages()
        .then(res => this.messageArray = res)
        //.then(() =>console.log(this.messageArray[0].startX)); 
    }
  ngOnInit(): void {
      this.fetchAllMessages();
      this.title = "Google mapa";
     //this.fetchAllMessages().forEach(element  => {
      
     // });

  }
}
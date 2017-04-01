"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var fetch_all_messages_service_1 = require('./fetch-all-messages.service');
var MapComponent = (function () {
    function MapComponent(fetchAllMessagesService) {
        this.fetchAllMessagesService = fetchAllMessagesService;
        this.lat = 45.81;
        this.lng = 15.98;
        this.zoom = 15;
    }
    MapComponent.prototype.fetchAllMessages = function () {
        var _this = this;
        this.fetchAllMessagesService
            .fetchAllMessages()
            .then(function (res) { return _this.messageArray = res; });
        //.then(() =>console.log(this.messageArray[0].startX)); 
    };
    MapComponent.prototype.ngOnInit = function () {
        this.fetchAllMessages();
        this.title = "Google mapa";
        //this.fetchAllMessages().forEach(element  => {
        // });
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            templateUrl: 'map.component.html',
            styleUrls: ['map.component.css'],
            providers: [fetch_all_messages_service_1.FetchAllMessagesService]
        }), 
        __metadata('design:paramtypes', [fetch_all_messages_service_1.FetchAllMessagesService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map
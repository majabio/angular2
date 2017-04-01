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
var router_1 = require('@angular/router');
var main_window_component_1 = require('./main-window.component');
var map_component_1 = require('../map/map.component');
var mainwindowRoutes = [
    { path: ':username', component: main_window_component_1.MainWindowComponent,
        children: [
            {
                path: '',
                component: map_component_1.MapComponent
            }
        ]
    }];
var MainWindowRoutingModule = (function () {
    function MainWindowRoutingModule() {
    }
    MainWindowRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(mainwindowRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainWindowRoutingModule);
    return MainWindowRoutingModule;
}());
exports.MainWindowRoutingModule = MainWindowRoutingModule;
//# sourceMappingURL=main-window-routing.module.js.map
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var main_window_routing_module_1 = require('./main-window-routing.module');
var main_window_component_1 = require('./main-window.component');
var MainWindowModule = (function () {
    function MainWindowModule() {
    }
    MainWindowModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                main_window_routing_module_1.MainWindowRoutingModule
            ],
            declarations: [main_window_component_1.MainWindowComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MainWindowModule);
    return MainWindowModule;
}());
exports.MainWindowModule = MainWindowModule;
//# sourceMappingURL=main-window.module.js.map
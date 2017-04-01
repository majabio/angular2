"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var map_component_1 = require('./map.component');
var mapRoutes = [
    { path: '', component: map_component_1.MapComponent }
];
core_1.NgModule({
    imports: [
        router_1.RouterModule.forChild(mapRoutes)
    ],
    exports: [
        router_1.RouterModule
    ]
});
var MapRoutingModule = (function () {
    function MapRoutingModule() {
    }
    return MapRoutingModule;
}());
exports.MapRoutingModule = MapRoutingModule;
//# sourceMappingURL=map-routing.module.js.map
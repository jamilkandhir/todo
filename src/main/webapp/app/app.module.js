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
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_service_1 = require("./providers/app.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, app_service_1.AppService],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFtaWxhaG1lZC9naXQvdG9kby9zcmMvbWFpbi93ZWJhcHAvIiwic291cmNlcyI6WyJzcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxxQkFBMkQsZUFBZSxDQUFDLENBQUE7QUFDM0UsdUJBQWdFLGlCQUFpQixDQUFDLENBQUE7QUFDbEYsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsNEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFtQnJEO0lBQUE7SUFBeUIsQ0FBQztJQVoxQjtRQUFDLGVBQVEsQ0FBQztZQUVSLE9BQU8sRUFBRSxDQUFFLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxpQkFBVSxFQUFDLDJCQUFtQjthQUNwRTtZQUVELFlBQVksRUFBRSxDQUFFLDRCQUFZLENBQUM7WUFFN0IsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSx5QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsRUFBRSx3QkFBVSxDQUFDO1lBQ3BGLE9BQU8sRUFBRSxDQUFDLDZCQUFzQixDQUFDO1NBQ2xDLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSxIdHRwLFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7RGF0ZVBpcGUsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tIFwiLi9wcm92aWRlcnMvYXBwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgIH0gZnJvbSBcIm1vZHVsZVwiO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cclxuICBpbXBvcnRzOiBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLCAgICAgIC8vIG1vZHVsZSBkZXBlbmRlbmNpZXNcclxuXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudF0sICAgLy8gY29tcG9uZW50c1xyXG5cclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sICAgICAvLyByb290IGNvbXBvbmVudCBcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSwgQXBwU2VydmljZV0sICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2aWNlc1xyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
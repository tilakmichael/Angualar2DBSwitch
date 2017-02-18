System.register(["@angular/core", "../app/service/app.data.service", "../app/service/app.db.source"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, app_data_service_1, app_db_source_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_data_service_1_1) {
                app_data_service_1 = app_data_service_1_1;
            },
            function (app_db_source_1_1) {
                app_db_source_1 = app_db_source_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: " <div class='container'>\n                   <div> \n                    <h2> Database Switching Example </h2>\n                 </div>\n                 <br> <br>      \n\n               <APP-HOME> </APP-HOME>\n            </div> \n               ",
                    providers: [app_data_service_1.AppDataService, app_db_source_1.AppdbSource]
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map
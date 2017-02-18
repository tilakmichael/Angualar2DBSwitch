System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "@angular/http", "../app/scripts/app.test", "../app/scripts/app.loc", "../app/scripts/app.home", "../app/service/app.menu.router", "../app/scripts/app.db.selection"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, app_component_1, http_1, app_test_1, app_loc_1, app_home_1, app_menu_router_1, app_db_selection_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_test_1_1) {
                app_test_1 = app_test_1_1;
            },
            function (app_loc_1_1) {
                app_loc_1 = app_loc_1_1;
            },
            function (app_home_1_1) {
                app_home_1 = app_home_1_1;
            },
            function (app_menu_router_1_1) {
                app_menu_router_1 = app_menu_router_1_1;
            },
            function (app_db_selection_1_1) {
                app_db_selection_1 = app_db_selection_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_menu_router_1.MenuRoutes],
                    declarations: [app_component_1.AppComponent, app_test_1.AppTest, app_loc_1.AppLoc, app_db_selection_1.AppDBSelection, app_home_1.AppHome, app_menu_router_1.MenuComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map
System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppHome;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppHome = (function () {
                function AppHome() {
                }
                return AppHome;
            }());
            AppHome = __decorate([
                core_1.Component({
                    selector: 'APP-HOME',
                    template: " <div class='container'>\n                 <div>\n                    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n                      <div class=\"container\">\n                             <ul class='nav navbar-nav'>\n                                 <li> <a [routerLink]=\"['']\"    > Home </a> </li>\n                                 <li> <a [routerLink]=\"['db']\"  > Database </a> </li>\n                                 <li> <a [routerLink]=\"['loc']\" > Location </a> </li> \n                             </ul>\n                      </div>\n                    </nav>\n                 </div> \n                 <div> \n                    <router-outlet> </router-outlet>\n                  </div>\n             </div>\n   "
                })
            ], AppHome);
            exports_1("AppHome", AppHome);
        }
    };
});
//# sourceMappingURL=app.home.js.map
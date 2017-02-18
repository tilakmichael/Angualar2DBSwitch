System.register(["@angular/core", "../service/app.db.source", "@angular/common"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, app_db_source_1, common_1, AppDBSelection;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_db_source_1_1) {
                app_db_source_1 = app_db_source_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            AppDBSelection = (function () {
                function AppDBSelection(_db, _loc) {
                    this._db = _db;
                    this._loc = _loc;
                }
                AppDBSelection.prototype.dbChange = function (event) {
                    console.log(event);
                    console.log("DB Name " + this.dbSource);
                    if (this.dbSource) {
                        this._db.setSource(this.dbSource);
                    }
                };
                AppDBSelection.prototype.ngOnInit = function () {
                    this.dbSource = this._db.getSource();
                };
                AppDBSelection.prototype.onBack = function () {
                    this._loc.back();
                };
                return AppDBSelection;
            }());
            AppDBSelection = __decorate([
                core_1.Component({
                    selector: 'APP-DB',
                    template: " <div class=\"container\">\n                  <div *ngIf=\"dbSource\">\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBack()\"> Back </button> \n                  </div> \n                  \n                  <p> Select Database </p>\n                     <select name=\"dbname\" [(ngModel)]=\"dbSource\"  (ngModelChange)=\"dbChange($event)\">\n                         <option value=\"mysql\">My Sql Database</option>\n                         <option value=\"mlab\">Mongo Mlab Database</option>\n                         <option value=\"mong\">Mongo Database</option>\n                         <option value=\"file\">Json File</option> \n                     </select>\n               </div>\n            "
                }),
                __metadata("design:paramtypes", [app_db_source_1.AppdbSource, common_1.Location])
            ], AppDBSelection);
            exports_1("AppDBSelection", AppDBSelection);
        }
    };
});
//# sourceMappingURL=app.db.selection.js.map
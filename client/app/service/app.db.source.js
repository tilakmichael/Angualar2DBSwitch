System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppdbSource;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppdbSource = (function () {
                function AppdbSource() {
                }
                AppdbSource.prototype.getSource = function () {
                    var dbs;
                    console.log(" Db Suource : " + this.dbSource);
                    if (this.dbSource) {
                        dbs = this.dbSource;
                    }
                    //else {
                    //   dbs = '<%= Session["dbSource"] %>';
                    //}
                    return dbs;
                };
                AppdbSource.prototype.setSource = function (db) {
                    console.log("Set db source : " + db);
                    this.dbSource = db;
                    '<%Session["dbSource"] = "' + db + '"; %>';
                };
                return AppdbSource;
            }());
            AppdbSource = __decorate([
                core_1.Injectable()
            ], AppdbSource);
            exports_1("AppdbSource", AppdbSource);
        }
    };
});
//# sourceMappingURL=app.db.source.js.map
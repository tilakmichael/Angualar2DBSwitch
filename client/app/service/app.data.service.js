System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/catch", "rxjs/add/Observable/throw"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, AppDataService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            AppDataService = (function () {
                function AppDataService(_http) {
                    this._http = _http;
                }
                AppDataService.prototype.getData = function (myDB, myTbl) {
                    console.log('get data');
                    var url = this.getURL(myDB, myTbl);
                    return this._http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (_error) {
                        console.log(_error);
                        return Observable_1.Observable.throw(_error + " : Data Service Error");
                    });
                };
                AppDataService.prototype.addData = function (myDB, myTbl, doc) {
                    console.log('save data');
                    var url = this.getURL(myDB, myTbl);
                    var header = new http_1.Headers();
                    header.append('content-type', 'application/json');
                    return this._http.post(url, JSON.stringify(doc), { headers: header })
                        .map(function (response) { return response.json(); })
                        .catch(function (_error) {
                        console.log(_error);
                        return Observable_1.Observable.throw(_error + " : Data Service Error");
                    });
                };
                AppDataService.prototype.updateData = function (myDB, myTbl, doc) {
                    console.log('update data');
                    var url = this.getURL(myDB, myTbl);
                    var header = new http_1.Headers();
                    header.append('content-type', 'application/json');
                    return this._http.put(url, JSON.stringify(doc), { headers: header })
                        .map(function (response) { return response.json(); })
                        .catch(function (_error) {
                        console.log(_error);
                        return Observable_1.Observable.throw(_error + " : Data Service Error");
                    });
                };
                AppDataService.prototype.deleteData = function (myDB, myTbl, id) {
                    console.log('delete data');
                    var url = this.getURL(myDB, myTbl) + "/" + id;
                    console.log(' url : ' + url);
                    try {
                        return this._http.delete(url)
                            .map(function (response) { return response.json(); })
                            .catch(function (_error) {
                            console.log(_error);
                            return Observable_1.Observable.throw(_error + " : Data Service Error");
                        });
                    }
                    catch (ex) {
                        console.log("Err: " + ex);
                    }
                };
                AppDataService.prototype.getURL = function (myDB, myTbl) {
                    var str = "/api/" + myDB + "/" + myTbl;
                    console.log("URL " + str);
                    return str;
                };
                return AppDataService;
            }());
            AppDataService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AppDataService);
            exports_1("AppDataService", AppDataService);
        }
    };
});
//# sourceMappingURL=app.data.service.js.map
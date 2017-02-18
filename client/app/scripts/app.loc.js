System.register(["@angular/core", "@angular/forms", "@angular/router", "../service/app.data.service", "../service/app.db.source"], function (exports_1, context_1) {
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
    var core_1, forms_1, router_1, app_data_service_1, app_db_source_1, AppLoc;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_data_service_1_1) {
                app_data_service_1 = app_data_service_1_1;
            },
            function (app_db_source_1_1) {
                app_db_source_1 = app_db_source_1_1;
            }
        ],
        execute: function () {
            AppLoc = (function () {
                function AppLoc(_data, _db, _builder, _router) {
                    this._data = _data;
                    this._db = _db;
                    this._builder = _builder;
                    this._router = _router;
                    this.allData = [];
                    this.locData = [];
                    this.counData = [];
                    this.error = [];
                    this.countEditFlag = false;
                    this.countEditIndex = -1;
                    this.locEditFlag = false;
                    this.locEditIndex = -1;
                    this.dbName = undefined;
                }
                ;
                AppLoc.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dbName = this._db.getSource();
                    console.log(' DB name ' + this.dbName);
                    if (!this.dbName) {
                        this._router.navigateByUrl('db');
                        this.dbName = this._db.getSource();
                    }
                    this._data.getData(this.dbName, "locs").subscribe(function (respData) {
                        _this.allData = respData;
                        //this.dbName  = this._db.getSource() ;
                        console.log(_this.allData.length);
                        _this.counData = _this.allData.filter(function (data) { return data.type == "CON"; });
                        if (_this.counData.length > 0) {
                            console.log(_this.counData);
                            var refid_1 = _this.counData[0]._id;
                            _this.counName = _this.counData[0].name;
                            _this.countId = _this.counData[0]._id;
                            //console.log("ref ID " + refid) ;
                            //console.log("name " + this.counData[0].name) ;
                            // get the location for the country id 
                            if (refid_1) {
                                _this.locData = _this.allData.filter(function (data) { return data.type == "LOC" && data.refid == refid_1; });
                            }
                        }
                        console.log(_this.locData.length);
                        console.log(_this.counData.length);
                    }, function (respError) { _this.error = respError; });
                };
                AppLoc.prototype.onCounRowClick = function (id, index) {
                    if (id) {
                        this.countId = this.counData[index]._id;
                        this.counName = this.counData[index].name;
                        this.locData = this.allData.filter(function (data) { return data.type == "LOC" && data.refid == id; });
                    }
                };
                AppLoc.prototype.onLocRowClick = function (id, index) {
                    if (id) {
                        this.countId = this.counData[index]._id;
                        this.counName = this.counData[index].name;
                    }
                };
                AppLoc.prototype.onCounEdit = function (index) {
                    //console.log( ' Edit ' + index) ;
                    this.countEditFlag = true;
                    this.countEditIndex = this.counData[index]._id;
                    this.counName = this.counData[index].name;
                    this.countId = this.counData[index]._id;
                    //console.log( ' Edit ' + this.countEditIndex) ;
                };
                AppLoc.prototype.onLocEdit = function (index) {
                    //console.log( ' Edit ' + index) ;
                    this.countEditFlag = true;
                    this.locEditIndex = this.locData[index]._id;
                    this.locName = this.locData[index].name;
                    this.locId = this.locData[index]._id;
                    //console.log( ' Edit ' + this.countEditIndex) ;
                };
                AppLoc.prototype.onCountCancel = function (id, index) {
                    console.log(' Cancell  ');
                    this.countEditFlag = false;
                    this.countEditIndex = -1;
                    this.counName = undefined;
                    if (id == -1) {
                        this.counData.splice(index, 1);
                    }
                };
                AppLoc.prototype.onLocCancel = function (id, index) {
                    console.log(' Cancell  ');
                    this.countEditFlag = false;
                    this.locEditIndex = -1;
                    this.locName = undefined;
                    if (id == -1) {
                        this.locData.splice(index, 1);
                    }
                };
                AppLoc.prototype.onCountAdd = function () {
                    this.counData.unshift({ "_id": -1, "name": "", "refid": null, "type": "CON" });
                    this.countEditFlag = true;
                    this.countEditIndex = -1;
                    this.counName = undefined;
                    this.locData = undefined;
                };
                AppLoc.prototype.onLocAdd = function () {
                    this.locData.unshift({ "_id": -1, "name": "", "refid": this.countId, "type": "LOC" });
                    this.countEditFlag = true;
                    this.locEditIndex = -1;
                    this.locName = undefined;
                };
                AppLoc.prototype.onCountDelete = function (id, index) {
                    var _this = this;
                    console.log(' Delete  ' + id + "/" + index);
                    this.countEditFlag = false;
                    this.countEditIndex = -1;
                    //if (id > 0) {
                    this.onCounRowClick(id, index);
                    if (this.locData.length > 0) {
                        alert("You can not delete country:" + this.counName + " when you have location. Please delete all location!");
                        this.counName = undefined;
                        return;
                    }
                    if (!confirm('Are sure you want to delete: ' + this.counName + '?')) {
                        return;
                    }
                    this.counName = undefined;
                    this._data.deleteData(this.dbName, 'locs', id).subscribe(function (respData) {
                        console.log("delete Response");
                        console.log(respData);
                        _this.counData.splice(index, 1);
                        _this.countId = undefined;
                    }, function (respError) { _this.error = respError; });
                    //} else {
                    //    this.counData.splice(index, 1);
                    //}
                };
                AppLoc.prototype.onLocDelete = function (id, index) {
                    var _this = this;
                    console.log(' Delete  ' + id + "/" + index);
                    this.countEditFlag = false;
                    this.locEditIndex = -1;
                    //if (id  != -1) {
                    if (!confirm('Are sure you want to delete: ' + this.locName + '?')) {
                        return;
                    }
                    this.locName = undefined;
                    this._data.deleteData(this.dbName, 'locs', id).subscribe(function (respData) {
                        console.log("delete Response");
                        console.log(respData);
                        _this.locData.splice(index, 1);
                        _this.locId = undefined;
                    }, function (respError) { _this.error = respError; });
                    //} else {
                    //    console.log("Delete only memory!") ; 
                    //    this.locData.splice(index, 1);
                    // }
                };
                AppLoc.prototype.onCountSave = function (id, index) {
                    var _this = this;
                    console.log(' Save  ');
                    console.log(" Name " + this.counName);
                    this.counData[index].name = this.counName;
                    var data = this.counData[index];
                    var dupid = this.findCountName(this.counName);
                    console.log(' dup id ' + dupid);
                    if (dupid >= 0) {
                        if (dupid != id) {
                            alert("The name already exists, pls enter diferent name");
                            return;
                        }
                    }
                    this.countEditFlag = false;
                    this.countEditIndex = -1;
                    data.name = this.counName;
                    this.counName = undefined;
                    console.log(data);
                    if (id == -1) {
                        // insert
                        this._data.addData(this.dbName, 'locs', data).subscribe(function (respData) {
                            console.log("Insert Response");
                            console.log(respData._id);
                            _this.counData[index]._id = respData._id;
                            data._id = respData._id;
                            _this.allData.push(data);
                        }, function (respError) { _this.error = respError; });
                    }
                    else {
                        // update 
                        this._data.updateData(this.dbName, 'locs', data).subscribe(function (respData) {
                            console.log("Insert Response");
                            console.log(respData);
                            // updata alldata
                            _this.updateLoc(data);
                        }, function (respError) { _this.error = respError; });
                    }
                };
                AppLoc.prototype.onLocSave = function (id, index) {
                    var _this = this;
                    console.log(' Save  ');
                    console.log(" Name " + this.locName);
                    this.locData[index].name = this.locName;
                    var data = this.locData[index];
                    var dupid = this.findLocName(this.locName, data.refid);
                    console.log(data);
                    if (dupid >= 0) {
                        if (dupid != id) {
                            alert("The name already exists, pls enter diferent name");
                            return;
                        }
                    }
                    this.locName = undefined;
                    this.countEditFlag = false;
                    this.locEditIndex = -1;
                    if (id == -1) {
                        // insert
                        this._data.addData(this.dbName, 'locs', data).subscribe(function (respData) {
                            console.log("Insert Response");
                            console.log(respData._id);
                            _this.locData[index]._id = respData._id;
                            data._id = respData._id;
                            _this.allData.push(data);
                            console.log(data);
                        }, function (respError) { _this.error = respError; });
                    }
                    else {
                        // update 
                        this._data.updateData(this.dbName, 'locs', data).subscribe(function (respData) {
                            console.log("Insert Response");
                            console.log(respData);
                            _this.updateLoc(data);
                        }, function (respError) { _this.error = respError; });
                    }
                };
                AppLoc.prototype.findCountName = function (name) {
                    var id = -1;
                    console.log(' find name : ' + name);
                    var index = this.allData.findIndex(function (data) { return (data.name == name && data.type == 'CON'); });
                    if (index >= 0) {
                        id = this.allData[index]._id;
                    }
                    console.log(id);
                    return id;
                };
                AppLoc.prototype.findLocName = function (name, refId) {
                    var id = -1;
                    console.log(' find name : ' + name + refId);
                    var index = this.allData.findIndex(function (data) { return data.name == name && data.refid == refId; });
                    if (index >= 0) {
                        id = this.allData[index]._id;
                    }
                    return id;
                };
                AppLoc.prototype.updateLoc = function (doc) {
                    var idex = this.allData.findIndex(function (data) { return data._id == doc._id; });
                    if (idex != -1) {
                        this.allData[idex] = doc;
                    }
                };
                return AppLoc;
            }());
            AppLoc = __decorate([
                core_1.Component({
                    selector: "app-loc",
                    templateUrl: "app/view/app.loc.html"
                }),
                __metadata("design:paramtypes", [app_data_service_1.AppDataService, app_db_source_1.AppdbSource, forms_1.FormBuilder, router_1.Router])
            ], AppLoc);
            exports_1("AppLoc", AppLoc);
        }
    };
});
//# sourceMappingURL=app.loc.js.map
System.register(["@angular/core", "@angular/forms", "../service/app.data.service"], function (exports_1, context_1) {
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
    var core_1, forms_1, app_data_service_1, AppTest;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_data_service_1_1) {
                app_data_service_1 = app_data_service_1_1;
            }
        ],
        execute: function () {
            AppTest = (function () {
                function AppTest(_data, _fBuildre) {
                    this._data = _data;
                    this._fBuildre = _fBuildre;
                    this.data = { "id": "", "name": "" };
                    this.allData = [];
                    this.formData = forms_1.FormGroup;
                    this.error = [];
                }
                AppTest.prototype.ngOnInit = function () {
                    var _this = this;
                    this._data.getData("api/mysql", "locs").subscribe(function (respData) {
                        _this.allData = respData;
                        console.log('All data length ' + _this.allData.length);
                    }, function (respError) { _this.error = respError; });
                };
                AppTest.prototype.onClick = function () {
                    var _this = this;
                    var insData;
                    this.data.name = this.name;
                    console.log(this.data);
                    this.name = '';
                    this._data.addData("MYSQL", "LOC", this.data).subscribe(function (respData) {
                        insData = respData;
                        console.log(insData);
                    }, function (respError) { _this.error = respError; console.log(_this.error); });
                };
                ;
                return AppTest;
            }());
            AppTest = __decorate([
                core_1.Component({
                    selector: 'app-test',
                    template: "<div>\n                  <p> Tilak Testing </p> \n                      <div> \n                         <tbody> \n                            <tr *ngFor=\"let data of allData ; let rowIndex=index \"> \n                                <td> {{data.id}} </td>\n                                <td> {{data.name}} </td> \n                            </tr> \n                         </tbody> \n                      </div>\n                     <div>\n                       <tbody> \n                        Name  <input type=\"tex\"  [(ngModel)]=\"name\"/> <br/>\n                        <input type=\"button\" name=\"save\" (click)=\"onClick()\" value=\"Save\"/> <br/>\n                        Entered {{name}}\n                        </tbody>\n                     </div>   \n                \n              </div>"
                }),
                __metadata("design:paramtypes", [app_data_service_1.AppDataService, forms_1.FormBuilder])
            ], AppTest);
            exports_1("AppTest", AppTest);
            ;
        }
    };
});
//# sourceMappingURL=app.test.js.map
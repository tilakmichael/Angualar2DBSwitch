import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AppDataService } from '../service/app.data.service';
import { AppdbSource } from "../service/app.db.source";
import { AppDBSelection } from '../scripts/app.db.selection';


@Component({
    selector: "app-loc",
    templateUrl: `app/view/app.loc.html`

})

export class AppLoc implements OnInit {
    public allData = [];
    public locData = [];
    public counData = [];
    public error = [];
    public data: FormGroup;
    public counName: string;
    public countId: number;
    public countEditFlag: boolean = false;
    public countEditIndex: number = -1
    public locEditFlag: boolean = false;
    public locEditIndex: number = -1;
    public locName: string;
    public locId: number;

    public dbName: string = undefined;
    constructor(private _data: AppDataService, private _db:AppdbSource ,  private _builder: FormBuilder, private _router:Router) { };

    ngOnInit() {
        this.dbName = this._db.getSource()  ;
        console.log(' DB name '+ this.dbName) ; 

        if(!this.dbName) {
           this._router.navigateByUrl('db') ;
           this.dbName = this._db.getSource()  ;
        }

        this._data.getData(this.dbName, "locs").subscribe(respData => {
            this.allData = respData
            //this.dbName  = this._db.getSource() ;
            console.log(this.allData.length) ;
            this.counData = this.allData.filter(data => { return data.type == "CON" });
            if (this.counData.length > 0) {
                console.log( this.counData) ;  
                let refid = this.counData[0]._id;
                this.counName = this.counData[0].name;
                this.countId = this.counData[0]._id;
                //console.log("ref ID " + refid) ;
                //console.log("name " + this.counData[0].name) ;
                // get the location for the country id 
                if (refid) {
                    this.locData = this.allData.filter(data => { return data.type == "LOC" && data.refid == refid });

                }
            }
            console.log(this.locData.length);
            console.log(this.counData.length);
        }, respError => { this.error = respError });

    }

    public onCounRowClick(id, index: number) {
        if (id) {
            this.countId = this.counData[index]._id;
            this.counName = this.counData[index].name;
            this.locData = this.allData.filter(data => { return data.type == "LOC" && data.refid == id });
        }

    }

    public onLocRowClick(id , index: number) {
        if (id) {
            this.countId = this.counData[index]._id;
            this.counName = this.counData[index].name;
        }

    }


    public onCounEdit(index) {
        //console.log( ' Edit ' + index) ;
        this.countEditFlag = true;
        this.countEditIndex = this.counData[index]._id;
        this.counName = this.counData[index].name;
        this.countId = this.counData[index]._id;
        //console.log( ' Edit ' + this.countEditIndex) ;

    }

    public onLocEdit(index) {
        //console.log( ' Edit ' + index) ;
        this.countEditFlag = true;
        this.locEditIndex = this.locData[index]._id;
        this.locName = this.locData[index].name;
        this.locId = this.locData[index]._id;
        //console.log( ' Edit ' + this.countEditIndex) ;

    }



    public onCountCancel(id , index: number) {
        console.log(' Cancell  ');
        this.countEditFlag = false;
        this.countEditIndex = -1;
        this.counName = undefined;

        if (id == -1) {
            this.counData.splice(index, 1);
        }
    }

    public onLocCancel(id , index: number) {
        console.log(' Cancell  ');
        this.countEditFlag = false;
        this.locEditIndex = -1;
        this.locName = undefined;

        if (id == -1) {
            this.locData.splice(index, 1);
        }
    }



    public onCountAdd() {
        this.counData.unshift({ "_id": -1, "name": "", "refid": null, "type": "CON" });
        this.countEditFlag = true;
        this.countEditIndex = -1;
        this.counName = undefined;
        this.locData = undefined;
    }

    public onLocAdd() {
        this.locData.unshift({ "_id": -1, "name":"", "refid": this.countId, "type": "LOC" });
        this.countEditFlag = true;
        this.locEditIndex = -1;
        this.locName = undefined;
    }


    public onCountDelete(id , index) {
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
            this._data.deleteData(this.dbName, 'locs', id).subscribe(respData => {
                console.log("delete Response");
                console.log(respData);
                this.counData.splice(index, 1);
                this.countId = undefined;


            }, respError => { this.error = respError });

        //} else {
        //    this.counData.splice(index, 1);
        //}

    }


    public onLocDelete(id , index) {
        console.log(' Delete  ' + id + "/" + index);
        this.countEditFlag = false;
        this.locEditIndex = -1;

        //if (id  != -1) {
            if (!confirm('Are sure you want to delete: ' + this.locName + '?')) {
                return;
            }
                this.locName = undefined;
                this._data.deleteData(this.dbName, 'locs', id).subscribe(respData => {
                console.log("delete Response");
                console.log(respData);
                this.locData.splice(index, 1);
                this.locId = undefined;


            }, respError => { this.error = respError });

        //} else {
        //    console.log("Delete only memory!") ; 
        //    this.locData.splice(index, 1);
       // }

    }



    public onCountSave(id , index: number) {
        console.log(' Save  ');
        console.log(" Name " + this.counName);
        this.counData[index].name = this.counName;
        let data = this.counData[index];

        let dupid:number = this.findCountName(this.counName);
        console.log(' dup id ' + dupid) ;
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
               this._data.addData(this.dbName, 'locs', data).subscribe(respData => {
                console.log("Insert Response");
                console.log(respData._id);
                this.counData[index]._id = respData._id;
                data._id = respData._id 
                this.allData.push(data) ; 

            }, respError => { this.error = respError });
        } else {
            // update 
            this._data.updateData(this.dbName, 'locs', data).subscribe(respData => {
                console.log("Insert Response");
                console.log(respData);
                // updata alldata
                this.updateLoc(data) ; 
            }, respError => { this.error = respError });
        }
    }


    public onLocSave(id , index: number) {
        console.log(' Save  ');
        console.log(" Name " + this.locName);
        this.locData[index].name = this.locName;
        let data = this.locData[index];


        let dupid  = this.findLocName(this.locName , data.refid);
       
        console.log(data);
        if (dupid >= 0) {
            if (dupid != id) {
                alert("The name already exists, pls enter diferent name");
                return;
            }
        }
        this.locName = undefined;
        this.countEditFlag = false ;
        this.locEditIndex = -1;

        if (id == -1) {
            // insert
            this._data.addData(this.dbName, 'locs', data).subscribe(respData => {
                console.log("Insert Response");
                console.log(respData._id);
                this.locData[index]._id = respData._id;
                data._id = respData._id;
                this.allData.push(data) ;
                console.log(data);
     
            }, respError => { this.error = respError });
        } else {

            // update 
            this._data.updateData(this.dbName, 'locs', data).subscribe(respData => {
                console.log("Insert Response");
                console.log(respData);
                this.updateLoc(data) ;
            }, respError => { this.error = respError });
        }
    }

    private findCountName(name: string) {
        let id = -1;
        console.log(' find name : '+name);
        let index = this.allData.findIndex(data => (data.name == name && data.type == 'CON') );
        if (index >= 0) {
            id = this.allData[index]._id;
        }
        console.log(id);
        return id;
    }

    private findLocName(name: string, refId ) {
        let id = -1;
        console.log(' find name : '+name +refId);
        let index = this.allData.findIndex(data => data.name == name && data.refid== refId);
        if (index >= 0) {
            id = this.allData[index]._id;
        }
        return id;
    }

    private updateLoc(doc:any) {
        let idex= this.allData.findIndex(data => data._id == doc._id) ;
        if (idex != -1) {
           this.allData[idex] = doc ;  
        }
    }


}
import {Component , OnInit } from '@angular/core';
import { AppdbSource } from "../service/app.db.source";
import {Router, ActivatedRoute} from '@angular/router' ; 
import {Location} from '@angular/common' ; 

@Component({
    selector:'APP-DB' , 
    template:` <div class="container">
                  <div *ngIf="dbSource">
                      <button type="button" class="btn btn-primary" (click)="onBack()"> Back </button> 
                  </div> 
                  
                  <p> Select Database </p>
                     <select name="dbname" [(ngModel)]="dbSource"  (ngModelChange)="dbChange($event)">
                         <option value="mysql">My Sql Database</option>
                         <option value="mlab">Mongo Mlab Database</option>
                         <option value="mong">Mongo Database</option>
                         <option value="file">Json File</option> 
                     </select>
               </div>
            `
}) 

export class AppDBSelection implements OnInit{
    public dbSource:string ; 


    constructor( private _db:AppdbSource, private _loc:Location ){ }
    public dbChange(event) {
        console.log(event) ; 
        console.log("DB Name " + this.dbSource) ;
        if (this.dbSource){
           this._db.setSource( this.dbSource) ;
           //this._loc.back() ;
        }
    }

    ngOnInit() {
       this.dbSource = this._db.getSource() ;
    }

    public onBack() {
       this._loc.back() ;
    }
     
} 
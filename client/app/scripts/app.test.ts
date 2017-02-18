import { Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validator} from '@angular/forms';
import {AppDataService} from "../service/app.data.service" ;



@Component({
    selector: 'app-test',
    template: `<div>
                  <p> Tilak Testing </p> 
                      <div> 
                         <tbody> 
                            <tr *ngFor="let data of allData ; let rowIndex=index "> 
                                <td> {{data.id}} </td>
                                <td> {{data.name}} </td> 
                            </tr> 
                         </tbody> 
                      </div>
                     <div>
                       <tbody> 
                        Name  <input type="tex"  [(ngModel)]="name"/> <br/>
                        <input type="button" name="save" (click)="onClick()" value="Save"/> <br/>
                        Entered {{name}}
                        </tbody>
                     </div>   
                
              </div>`
})

export class AppTest implements OnInit{
    public name: string;
    public data = {"id":"" ,"name":""} ; 
    public allData = [] ;
    public formData = FormGroup ;
    public error = [] ;

    constructor(private _data:AppDataService, private _fBuildre: FormBuilder ){}
    ngOnInit(){
        this._data.getData("api/mysql", "locs").subscribe(respData =>  {this.allData = respData ; 
                     console.log( 'All data length ' + this.allData.length) }, respError => {this.error=respError}) ;
    }
    public onClick() {
        let insData:any ;
        this.data.name = this.name ; 
        console.log(this.data) ;  
        this.name = '' ;
        this._data.addData("MYSQL", "LOC",this.data).subscribe(respData =>  {insData = respData ; 
                     console.log(  insData) }, respError => {this.error=respError ; console.log(this.error)}) ;

    } ;
};
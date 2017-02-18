import {Injectable} from '@angular/core' ;
import {Http, Response, Headers} from '@angular/http' ;
import {Observable} from 'rxjs/Observable' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/Observable/throw' ;

@Injectable()
export class AppDataService{

     constructor(private _http:Http){}

     public getData(myDB:String, myTbl:String) {
        console.log('get data');
        let url:string = this.getURL(myDB, myTbl) ;
        return this._http.get(url)
            .map( (response:Response) => response.json() ) 
            .catch( (_error:Response) => {
                console.log(_error) ; 
                return Observable.throw(_error + " : Data Service Error") ;
            }) ;
     }

     public addData(myDB:String, myTbl:String, doc:any) {
         console.log( 'save data') ; 
         let url:string = this.getURL(myDB, myTbl) ;
         var header = new Headers() ; 
         header.append('content-type', 'application/json') ;
         return this._http.post(url, JSON.stringify(doc), {headers:header})
            .map( (response:Response) => response.json() ) 
            .catch( (_error:Response) => {
                console.log(_error) ; 
                return Observable.throw(_error + " : Data Service Error") ;
            }) ;

     }

   public updateData(myDB:String, myTbl:String, doc:any) {
         console.log( 'update data') ; 
         let url:string = this.getURL(myDB, myTbl) ;
         var header = new Headers() ; 
         header.append('content-type', 'application/json') ;
         return this._http.put(url, JSON.stringify(doc), {headers:header})
            .map( (response:Response) => response.json() ) 
            .catch( (_error:Response) => {
                console.log(_error) ; 
                return Observable.throw(_error + " : Data Service Error") ;
            }) ;

     }

   public deleteData(myDB:String, myTbl:String, id:number) {
         console.log( 'delete data') ; 
         let url:string = this.getURL(myDB, myTbl)+"/"+id ;
         console.log( ' url : '+ url) ;
         try {

         return this._http.delete(url)
            .map( (response:Response) => response.json() ) 
            .catch( (_error:Response) => {
                console.log(_error) ; 
                return Observable.throw(_error + " : Data Service Error") ;
            }) ;
         }catch(ex){
             console.log("Err: " + ex) ; 
         }
     }


   private getURL(myDB:String, myTbl:String){
        let str:string = "/api/"+myDB+"/"+myTbl ;
        console.log("URL " + str) ;
        return str ;
   }  
}
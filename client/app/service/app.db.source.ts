import {Injectable} from '@angular/core' ;

@Injectable()
export class AppdbSource{
    public dbSource:string ; 


    public getSource() {
        let dbs:string ;
        console.log(" Db Suource : " + this.dbSource) ;  
        if (this.dbSource) {
           dbs = this.dbSource ;
        } 
        //else {
        //   dbs = '<%= Session["dbSource"] %>';
        //}
        return dbs ;
    
     }

     public setSource(db:string){
        console.log("Set db source : "+ db) ; 
        this.dbSource = db ;
        '<%Session["dbSource"] = "' + db + '"; %>';
     }
}
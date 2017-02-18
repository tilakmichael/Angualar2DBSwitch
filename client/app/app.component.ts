import { Component } from '@angular/core';
import {AppDataService} from "../app/service/app.data.service" ;
import { AppdbSource } from "../app/service/app.db.source";
import {AppHome} from '../app/scripts/app.home' ; 


@Component({
  selector: 'my-app',
  template: ` <div class='container'>
                   <div> 
                    <h2> Database Switching Example </h2>
                 </div>
                 <br> <br>      

               <APP-HOME> </APP-HOME>
            </div> 
               ` ,
  providers:[AppDataService , AppdbSource]
  /*
  template: `<html>
                 <header>
                    <h1> Client </h1>
                 </header>
                 <body>
                    <h3>  This is Client Test </h3>
                 </body>
             </html>`
  */           

  
})
export class AppComponent {}

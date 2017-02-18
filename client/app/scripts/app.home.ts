import {Component} from '@angular/core';
import {AppLoc  } from './app.loc';
import { MenuRoutes} from '../service/app.menu.router' ; 
import { AppDBSelection } from './app.db.selection' ; 


@Component({
   selector:'APP-HOME' , 
   template:` <div class='container'>
                 <div>
                    <nav class="navbar navbar-inverse navbar-fixed-top">
                      <div class="container">
                             <ul class='nav navbar-nav'>
                                 <li> <a [routerLink]="['']"    > Home </a> </li>
                                 <li> <a [routerLink]="['db']"  > Database </a> </li>
                                 <li> <a [routerLink]="['loc']" > Location </a> </li> 
                             </ul>
                      </div>
                    </nav>
                 </div> 
                 <div> 
                    <router-outlet> </router-outlet>
                  </div>
             </div>
   `
}) 

export class AppHome{
    
}
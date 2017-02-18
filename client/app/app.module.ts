import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule }      from "@angular/http" ;


import { AppTest}  from '../app/scripts/app.test' ;
import {AppLoc  } from '../app/scripts/app.loc';
import {AppHome  } from '../app/scripts/app.home';
import { MenuComponent, MenuRoutes} from '../app/service/app.menu.router' ; 
import { AppDBSelection } from '../app/scripts/app.db.selection';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpModule , MenuRoutes],
  declarations: [ AppComponent,AppTest,AppLoc, AppDBSelection, AppHome, MenuComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }

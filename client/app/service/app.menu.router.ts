import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, provideRoutes} from '@angular/router';


import {AppHome} from '../scripts/app.home' ;
import {AppLoc} from '../scripts/app.loc' ;
import { AppDBSelection} from '../scripts/app.db.selection' ; 

const routes:Routes=[
    {path:'', component: AppHome}, 
    {path:'loc', component: AppLoc}, 
    {path:'db', component:AppDBSelection}
];

export const MenuRoutes: ModuleWithProviders= RouterModule.forRoot(routes);
export const MenuComponent= [AppHome, AppLoc, AppDBSelection] ;
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppRoot }  from './components/app-root/app-root'
import { AppNavbar } from "./components/app-navbar/app-navbar";

import { RouteHome } from "./components/route-home/route-home";
import { RoutePage2 } from "./components/route-page2/route-page2";
import { RoutePage3 } from "./components/route-page3/route-page3";

@NgModule({
    imports: [ BrowserModule ,
               RouterModule.forRoot([
                    {path: '',   component: RouteHome},
                    {path: 'page2', component: RoutePage2},
                    {path: 'page3', component: RoutePage3}]) 
    ],
    declarations: [ AppRoot, AppNavbar, RouteHome, RoutePage2, RoutePage3 ],
    providers:    [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppRoot ]
})
export class AppModule { }

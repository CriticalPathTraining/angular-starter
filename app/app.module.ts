import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppRoot }  from './components/app-root/app-root'
import { AppNavbar } from "./components/app-navbar/app-navbar";

import { RouteHome } from "./components/route-home/route-home";
import { RoutePage2 } from "./components/route-page2/route-page2";
import { RoutePage3 } from "./components/route-page3/route-page3";
import { RoutePage4 } from "./components/route-page4/route-page4";
import { RoutePage5 } from "./components/route-page5/route-page5";
import { RoutePage6 } from "./components/route-page6/route-page6";
import { RoutePage7 } from "./components/route-page7/route-page7";
import { RoutePage8 } from "./components/route-page8/route-page8";

@NgModule({
    imports: [ BrowserModule ,
               RouterModule.forRoot([
                    {path: '',   component: RouteHome},
                    {path: 'page2', component: RoutePage2},
                    {path: 'page3', component: RoutePage3},
                    {path: 'page4', component: RoutePage4},
                    {path: 'page5', component: RoutePage5},
                    {path: 'page6', component: RoutePage6},
                    {path: 'page7', component: RoutePage7},
                    {path: 'page8', component: RoutePage8} ]) 
    ],
    declarations: [ AppRoot, AppNavbar, RouteHome, RoutePage2, RoutePage3, 
                    RoutePage4, RoutePage5, RoutePage6, RoutePage7, RoutePage8 ],
    providers:    [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppRoot ]
})
export class AppModule { }

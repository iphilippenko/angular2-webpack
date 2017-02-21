import {HeaderComponent} from './header/header.component';
import {StaticComponent} from './static.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HeaderComponent,
        StaticComponent
    ],
    exports: [
        HeaderComponent,
        StaticComponent
    ]
})
export class StaticModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ContentComponent} from "./content.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ProgressBarComponent} from "../sidebar/progress-bar/progress-bar.component";
import {SidebarNavigationComponent} from "../sidebar/sidebar-navigation/sidebar-navigation.component";
import {MainNavigationComponent} from "../sidebar/sidebar-navigation/main-navigation/main-navigation.component";
import {SubNavigationComponent} from "../sidebar/sidebar-navigation/sub-navigation/sub-navigation.component";
import {ContentTitleComponent} from "./content-title/content-title.component";
import {ContentDescriptionComponent} from "./content-description/content-description.component";
import {OfficesModule} from "../offices/offices.module";
@NgModule({
    imports: [
        BrowserModule,
        OfficesModule
    ],
    declarations: [
        ContentComponent,
        SidebarComponent,
        ProgressBarComponent,
        SidebarNavigationComponent,
        MainNavigationComponent,
        SubNavigationComponent,
        ContentTitleComponent,
        ContentDescriptionComponent
    ],
    exports: [
        ContentComponent,
        SidebarComponent,
        ProgressBarComponent,
        SidebarNavigationComponent,
        MainNavigationComponent,
        SubNavigationComponent,
        ContentTitleComponent,
        ContentDescriptionComponent
    ]
})
export class ContentModule { }

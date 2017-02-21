import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {OfficesComponent} from "./offices.component";
import {OfficeViewComponent} from "./office-view/office-view.component";
import {EditOfficeComponent} from "./edit-office/edit-office.component";
import {AddOfficeComponent} from "./add-office/add-office.component";
import {DeleteOfficeComponent} from "./delete-office/delete-office.component";
import {OfficesService} from "./offices.service";
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        OfficesComponent,
        OfficeViewComponent,
        EditOfficeComponent,
        AddOfficeComponent,
        DeleteOfficeComponent
    ],
    exports: [
        OfficesComponent,
        OfficeViewComponent,
        EditOfficeComponent,
        AddOfficeComponent,
        DeleteOfficeComponent
    ],
    providers: [
      OfficesService
    ],
})
export class OfficesModule { }

import {Component, Input} from '@angular/core';
import {IOffice} from "./office.model";
@Component({
    moduleId: 'module.id',
    selector: 'office-view',
    templateUrl: './office-view.html',
    styleUrls: ['./office-view.css']
})
export class OfficeViewComponent  {
    @Input() office: IOffice;

    deleteMode: boolean = false;
    editMode: boolean = false;

    toggleDelete(bool: boolean) {
        this.deleteMode = bool;
    }

    toggleEdit(bool: boolean) {
        this.editMode = bool;
    }

    cancelEditing(): void {
        this.toggleEdit(false);
    }

    cancelDeleting(): void {
        this.toggleDelete(false);
    }
}
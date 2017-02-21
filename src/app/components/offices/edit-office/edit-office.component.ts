import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    moduleId: 'module.id',
    selector: 'edit-office',
    templateUrl: './edit-office.html',
    styleUrls: ['./edit-office.css']
})
export class EditOfficeComponent  {

    @Output() cancel = new EventEmitter();

    cancelEditing(): void {
        this.cancel.emit();
    }

}

import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    moduleId: 'module.id',
    selector: 'delete-office',
    templateUrl: './delete-office.html',
    styleUrls: ['./delete-office.css']
})
export class DeleteOfficeComponent  {

    @Output() cancel = new EventEmitter();

    cancelDeleting(): void {
        this.cancel.emit();
    }
}
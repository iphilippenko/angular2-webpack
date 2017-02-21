import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    moduleId: 'module.id',
    selector: 'add-office',
    templateUrl: './add-office.html',
    styleUrls: ['./add-office.css']
})
export class AddOfficeComponent  {
    @Output() cancel = new EventEmitter();

    cancelAdding(): void {
        this.cancel.emit();
    }
}
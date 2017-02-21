import {Component, OnInit} from '@angular/core';
import {IOffice} from "./office-view/office.model";
import {OfficesService} from "./offices.service";

@Component({
    moduleId: 'module.id',
    selector: 'offices',
    templateUrl: './offices.html',
    styleUrls: ['./offices.css']
})
export class OfficesComponent implements OnInit{
    offices: IOffice[];

    addMode: boolean = false;
    isNewOffice: boolean = false;

    toggleAdd(bool: boolean) {
      this.addMode = bool;
      this.isNewOffice = bool;
    }

    cancelAdding(): void {
        this.toggleAdd(false);
    }

    constructor(private officesService: OfficesService){

    }

    getOffices(): void {
      this.offices = this.officesService.getOffices();
    }

    ngOnInit(): void {
      this.getOffices();
    }
}
import { Injectable } from '@angular/core';
import {IOffice} from "./office-view/office.model";
import {OFFICES} from "./offices";

@Injectable()
export class OfficesService {
  getOffices(): IOffice[] {
    return OFFICES;
  }
}

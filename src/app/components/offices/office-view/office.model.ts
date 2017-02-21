export interface IOffice {
    primaryHQ?: boolean,
    country: string,
    state: string,
    postalCode: string,
    city: string,
    street: string,
    phone: string,
    fax?: string,
    email?: string
}
export class OfficeModel implements IOffice {
    primaryHQ: boolean;
    country: string;
    state: string;
    postalCode: string;
    city: string;
    street: string;
    phone: string;
    fax: string;
    email: string;
    constructor(office?: IOffice){
        if (office){
            this.primaryHQ = office.primaryHQ || null;
            this.country = office.country;
            this.state = office.state;
            this.postalCode = office.postalCode;
            this.city = office.city;
            this.phone = office.phone;
            this.street = office.street;
            this.fax = office.fax || null;
            this.email = office.email || null;
        }
    }
}
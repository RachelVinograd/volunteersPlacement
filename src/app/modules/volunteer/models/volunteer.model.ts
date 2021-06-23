
export class Volunteer{

    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    volunteerWeek: boolean[];

    constructor(id){
        this.id = id;
    }
}
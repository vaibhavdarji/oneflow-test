export class LinkedUsers {
    id: number;
    title: string;
    regNo: number;
    name: string;
    about: string;
    type: string;

    constructor(id: number, title: string, regNo: number, name: string, about: string, type: string) {
        this.id = id;
        this.title = title;
        this.regNo = regNo;
        this.name = name;
        this.about = about;
        this.type = type;
    }
}

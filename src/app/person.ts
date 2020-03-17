export class Person {
    name : String;
    familyName: String;
    dateOfBirth : Date;
    placeOfBirth : String;
    identityNumber : number;
    dateDelivry : Date;
    placeDelivry : String;
    fatherName : String;
    motherName: String;
    profession : String
    duplicateDate: Date;
    placeOfDuplicateDate: String;

    /*constructor(
        name : String,
    familyName: String,
    dateOfBirth : String,
    placeOfBirth : String,
    identityNumber : number,
    dateDelivry : String,
    placeDelivry : String,
    fatherName : String,
    motherName: String,
    profession : String,
    duplicateDate: String,
    placeOfDuplicateDate: String
    ) {} */

    constructor(name: String, dateDelivry:String){}
}
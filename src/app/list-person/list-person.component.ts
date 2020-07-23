import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Person } from '../person';
import { CommuneService } from '../commune.service';
import { Commune } from '../commune';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  person1: any;
  closeResult: string;
  message: any;
  personAdd: Person = new Person("","", " Date().toDateString",  "",0, new Date(), "","","", new Date(),   "", "","",0,0);
  person : Person;
  communeName : any;

  constructor( private servicePers:PersonService, private modalService: NgbModal, private commune:CommuneService) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public addPersonNow() {
    let response = this.servicePers.addPerson(this.personAdd);
    response.subscribe((data)=>this.message=data)
  }

  public getPersonByCIN(identityNumber) {
     let resp = this.servicePers.getPersonByCIN(identityNumber);
     resp.subscribe((data)=>this.message=data)
  }

  public deletePerson(id:number) {
    let resp = this.servicePers.deletePerson(id);
     resp.subscribe((data)=>this.person1 = data)
  }

  public listPerson() {
    this.servicePers.getListPerson().subscribe(
      data => {
                this.person1 = data;
                console.log('this.data',this.person1)
              }
    );
  }

  public getCommune() {
    this.commune.getCommune().subscribe(
      data => {
                  this.communeName = data;
                  console.log('this.data',this.communeName);
              }
    );
  }

  ngOnInit(){
    this.servicePers.getListPerson().subscribe(
      data => {
                this.person1 = data;
                console.log('this.data',this.person1)
              }
    );

    this.commune.getCommune().subscribe(
      data => {
        this.communeName = data;
        console.log('this.data',this.communeName);
    }
    );
  }


}

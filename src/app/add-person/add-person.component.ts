import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  //person: Person = new Person("","","","",0,"","","","","","","")
  person : Person = new Person("","");
  message: any;

  constructor(private servicePers: PersonService) { }

  ngOnInit() {
    
  }
  public addPersonNow() {
    let response = this.servicePers.addPerson(this.person);
    response.subscribe((data)=>this.message=data)
  }

}

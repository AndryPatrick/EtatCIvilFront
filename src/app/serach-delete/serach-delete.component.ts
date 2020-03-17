import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

 users: User[] ;

  constructor(private service:UserRegistrationService) { }

  ngOnInit()  {
   
    this.service.getUsers().subscribe(data =>
     this.users=data);
     console.log('this.users--->', this.users);
    
  }
}

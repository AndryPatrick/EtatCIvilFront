import { Component, OnInit, NgModule } from '@angular/core';
import { CommuneService } from '../commune.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-ajout-personne',
  templateUrl: '../list-person/ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit {
  
  communeName : any;

  constructor(private commune:CommuneService, private modalService:NgbModal, private ServicePers:PersonService) { }

  public getCommune() {
    this.commune.getCommune().subscribe(
        data => {
                  this.communeName = data;
                  console.log('this.data',this.communeName);
                }
    );
  }

  ngOnInit() {
    this.commune.getCommune().subscribe(
      data => {
                this.communeName = data;
                console.log('this.data',this.communeName);
              }
  );
  }

}

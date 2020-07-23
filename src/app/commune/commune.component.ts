import { Component, OnInit } from '@angular/core';
import { CommuneService } from '../commune.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DistrictService } from '../district.service';
import { Commune } from '../commune';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {
  commune : any;
  closeResult: string;
  message: any;
  districtCommune :  any;
  communeAdd : Commune  = new Commune("");

  constructor(private serviceCommune : CommuneService, private modalService : NgbModal, private districtService : DistrictService) { }

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

  private addCommune() {
    let reponse  = this.serviceCommune.addCommune(this.communeAdd);
      reponse.subscribe((data)=>this.message = data);
    }

  ngOnInit() {
    this.serviceCommune.getListCommune().subscribe(
      data => {
          this.commune = data;
          console.log('this.data',this.commune)
      }
    );
    this.districtService.getListDistrict().subscribe(
      data => {
        this.districtCommune = data;
        console.log('this.data',this.districtCommune)
      }
    );

  }

}

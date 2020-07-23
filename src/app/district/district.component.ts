import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { District } from '../district';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  district : any;
  closeResult: string;
  districtAdd : District = new District("",0);
  message : any;
  regionDistrict :  any;

  constructor(private serviceDistrict : DistrictService, private modalService : NgbModal, private serviceRegion : RegionService) { }

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

  private addDistrict() {
    let response = this.serviceDistrict.addDistrict(this.districtAdd);
    response.subscribe((data)=>this.message =  data);
  }

  private listeDistrict() {
    return this.serviceDistrict.getListDistrict().subscribe(
        data => {
          this.district = data;
          console.log('this.data',this.district);
        }
    );
  }

  public listeRegion () {
    let reponse = this.serviceRegion.getListRegion().subscribe(
        data => {
          this.regionDistrict = data;
          console.log('this.data', this.regionDistrict);
        }
    );
  }

  ngOnInit(){
    this.serviceDistrict.getListDistrict().subscribe(
      data => {
        this.district = data;
        console.log('this.data',this.district)
      }
    );
    this.serviceRegion.getListRegion().subscribe(
      data => {
        this.regionDistrict = data;
        console.log('this.data', this.regionDistrict);
      }
  );
  }

}

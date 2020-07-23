import { Component, OnInit } from '@angular/core';
import { RegionService } from '../region.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProvinceService } from '../province.service';
import { Region } from '../region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  message : any;
  region : any;
  regionAdd : Region = new Region("","",0);
  provinceRegion : any;

  closeResult: string;
  constructor(private serviceRegion : RegionService, private modalService : NgbModal,private province : ProvinceService) { }

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

  public addRegion() {
    let response = this.serviceRegion.addRegion(this.regionAdd);
    response.subscribe((data)=>this.message = data);
  }

  public getProvince() {
      let province = this.province.getListProvince().subscribe(
        data => {
          this.provinceRegion = data;
          console.log('this.data',this.provinceRegion);
        }
      );
  }

  public listeRegion() {
    this.serviceRegion.getListRegion().subscribe(
      data=> {
          this.region = data;
          console.log('this.data',this.region);
      }
    );
  }

  ngOnInit() {
    this.serviceRegion.getListRegion().subscribe(
      data => {
        this.region = data;
        console.log('this.data',this.region)
      }
    );
    let province = this.province.getListProvince().subscribe(
      data => {
        this.provinceRegion = data;
        console.log('this.data',this.provinceRegion);
      }
    );
  }

}

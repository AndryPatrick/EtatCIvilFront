import { Component, OnInit } from '@angular/core';
import { RegionService } from '../region.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProvinceService } from '../province.service';
import { Region } from '../region';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  message : any;
  regionList : any;
  regions : Observable<Region[]>;
  region : Region = new Region();
  provinceRegion : any;
  isUpdated = false;
  nom : any;

  closeResult: string;
  constructor(private serviceRegion : RegionService, private modalService : NgbModal,private province : ProvinceService) { }

  ngOnInit() {
    this.isUpdated = false;
    this.serviceRegion.getListRegion().subscribe(
      data => {
        this.regions = data;
        console.log('this.data',this.regions)
      }
    );
    let province = this.province.getListProvince().subscribe(
      data => {
        this.provinceRegion = data;
        console.log('this.data',this.provinceRegion);
      }
    );
  }

  public addRegion() {
    let response = this.serviceRegion.addRegion(this.region);
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
          this.regions = data;
          console.log('this.data',this.regions);
      }
    );
  }

  updateRegion(id:number) {
    this.serviceRegion.getRegion(id).subscribe(
      data => {
          this.regionList = data;
          console.log("this.data", this.regionList);
      },
    error => console.log(error));  
  }

  regionUpdateForm = new FormGroup({
    idRegion : new FormControl(),
    codeRegion : new FormControl(),
    nameRegion : new FormControl(),
    idProvince : new FormControl(),    
    nomProvince : new FormControl()
  });

  updateReg(updReg) {
    this.region = new Region();
    this.region.idRegion = this.RegionId.value;
    this.region.nameRegion = this.RegionName.value;
    this.region.idProvince = this.ProvinceId.value;
    this.region.nomProvince = this.ProvinceNom.value;

    this.serviceRegion.updateRegion(this.region.idRegion, this.region).subscribe(
      data => {
        this.isUpdated = true;
        this.serviceRegion.getListRegion().subscribe(data => {
          this.regions = data;
        })
      },
      error => console.log(error));
  }

  changeisUpdate() {
    this.isUpdated = false;
  } 

  //class modal pour l'ajout
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
  //fin description modal

  get RegionId() {
    return this.regionUpdateForm.get("idRegion");
  }

  get RegionCode() {
    return this.regionUpdateForm.get("codeRegion");
  }

  get RegionName() {
    return this.regionUpdateForm.get("nameRegion");
  }

  get ProvinceId() {
    return this.regionUpdateForm.get("idProvince");
  }

  get ProvinceNom() {
    return this.regionUpdateForm.get("nomProvince");
  }

}
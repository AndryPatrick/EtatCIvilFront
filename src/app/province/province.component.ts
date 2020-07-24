import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../province.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Province1 } from '../province1';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router,private serviceProvince : ProvinceService,
    private modalService : NgbModal) { }

  provinceArray : any[] = [];
  dtOptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject();
  
  provinces: Observable<Province1[]>;
  province : Province1= new Province1();
  deleteMessage=false;
  provinceList : any;
  isupdated = false;

  closeResult: string;
  message : any;
  idProvince : number;

  ngOnInit(){
    this.isupdated = false;
    this.dtOptions = {
      pageLength:6,
      stateSave: true,
      lengthMenu:[[6,16,20,-1] , [6,16,20,"All"]],
      processing:true
    };
    this.serviceProvince.getListProvince().subscribe(data => {
        this.provinces = data;
        this.dtTrigger.next();
        console.log('this.data',this.provinces)
      })
  }

  public deleteProvince1(id:number) {
    let resp = this.serviceProvince.deleteProvince(id);
     resp.subscribe((data)=>this.provinceList = data)
  }

  deleteProvince(id:number) {
    this.serviceProvince.deleteProvince(id)
      .subscribe( 
        data => {
            console.log(data);
            this.deleteMessage=true;
            this.serviceProvince.getListProvince().subscribe(data => {
              this.provinces = data;
            })
        },
          error => console.log(error));
  }

  updateProvince(id: number) {
    this.serviceProvince.getProvince(id)
    .subscribe(
      data => {
        this.provinceList = data;
        console.log('this.data', this.provinceList);
      },
      error => console.log(error));
  }
  
  provinceUpdateForm = new FormGroup ({
    idProvince : new FormControl(),
    code : new FormControl(),
    nomProvince : new FormControl()
  });

  provinceSaveForm= new FormGroup({
    idProvince : new FormControl('',[Validators.required, Validators.minLength(5)]),
    code : new FormControl('',[Validators.required]),
    nomProvince : new FormControl()
  });

  saveProvince(saveProvince) {
    this.province = new Province1();
    this.province.idProvince = this.IdProvince.value;
    this.province.code = this.CodeProvince.value;
    this.province.nomProvince = this.NomProvince.value;
    //this.submitted =true;
    this.save();
  }
  
  updateProv(updprov) {
    this.province = new Province1();
    this.province.idProvince = this.ProvinceId.value;
    this.province.code = this.ProvinceCode.value;
    this.province.nomProvince = this.ProvinceNom.value;
  
    this.serviceProvince.updateProvince(this.province.idProvince, this.province).subscribe(
      data => {
        this.isupdated =true;
        this.serviceProvince.getListProvince().subscribe(data => {
        this.provinces = data
        })
      },
       error => console.log(error));
  }
  
    save() {
      this.serviceProvince.createProvince(this.province)
        .subscribe(data => console.log(data), error => console.log(error));
        this.province = new Province1();
    }

    addProvinceForm() {
      //this.submitted=false;
      this.provinceSaveForm.reset();
    }

    get ProvinceId() {
      return this.provinceUpdateForm.get('idProvince');
    }
  
    get ProvinceCode() {
      return this.provinceUpdateForm.get('code');
    }
  
    get ProvinceNom() {
      return this.provinceUpdateForm.get('nomProvince');
    }

    get IdProvince() {
      return this.provinceSaveForm.get('idProvince');
    }
  
    get CodeProvince() {
      return this.provinceSaveForm.get('code');
    }
  
    get NomProvince() {
      return this.provinceSaveForm.get('nomProvince');
    }
  
    changeisUpdate() {
      this.isupdated = false;
    }


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

  private addProvince() {
    let response = this.serviceProvince.addProvince(this.province);
    response.subscribe((data)=>this.message = data);
  }

  private listeProvince() {
    let reponse = this.serviceProvince.getListProvince().subscribe(
      data => {
        this.provinces = data;
        console.log('this.data', this.province);
      }
    );
  }


 /* update ( idProvince:number){
    this.idProvince = this.route.snapshot.params['idProvince'];
    this.serviceProvince.getProvince(this.idProvince).subscribe(
      data => {
        console.log(data)
        this.provinceList = data;
      }, error => console.log(error));
  }

  updateProvince() {
    this.serviceProvince.updateProvince(this.idProvince, this.province).
      subscribe(data => console.log(data), error => console.log(error));
      this.province1 = new Province1();
      this.gotoList();
  }

  onSubmit() {
    this.updateProvince();
  }

  gotoList() {
    this.router.navigate(['/listeProvince']);
  }

 /* updateProvincee(id : number) {
      this.router.navigate(["/update", id]);
  } */


// nouveau methode


}

import { Component, OnInit } from '@angular/core';
import { Province1 } from '../province1';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceService } from '../province.service';

@Component({
  selector: 'app-update-proince',
  templateUrl: './update-proince.component.html',
  styleUrls: ['./update-proince.component.css']
})
export class UpdateProinceComponent implements OnInit {

  id: number;
  province : any;

  constructor(private route: ActivatedRoute, private router: Router,
    private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.province = new Province1();
    this.id = this.route.snapshot.params['id'];

    this.provinceService.getProvince(this.id)
      .subscribe(data => {
        console.log(data);
        this.province = data;
      }, error => console.log(error));
  }

  updateProvince() {
    this.provinceService.updateProvince(this.id, this.province)
      .subscribe(data => console.log(data), error => console.log(error));
    this.province = new Province1();
    this.gotoList();
  }

  onSubmit() {
    this.updateProvince();
  }

  gotoList() {
    this.router.navigate(['/listeProvince']);
  }

}

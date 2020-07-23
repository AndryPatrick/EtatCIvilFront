import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { District } from './district';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient) { }

  public getListDistrict() {
    return this.http.get("http://localhost:8080/localisation/getAllDistrict");
  }

  public addDistrict(district) {
    let url = "http://localhost:8080/localisation/addDistrict";
    return this.http.post<District>(url,district,{responseType : 'text' as 'json'});
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  public getListRegion() {
    return this.http.get("http://localhost:8080/localisation/getAllRegion");
  }

  public addRegion(region) {
    let url = "http://localhost:8080/localisation/addRegion";
    return this.http.post<Region>(url,region,{responseType:'text' as 'json'})
  }

}

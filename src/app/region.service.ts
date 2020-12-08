import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from './region';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  public getListRegion(): Observable<any> {
    return this.http.get("http://localhost:8080/localisation/getAllRegion");
  }

  public addRegion(region) {
    let url = "http://localhost:8080/localisation/addRegion";
    return this.http.post<Region>(url,region,{responseType:'text' as 'json'})
  }
  
  public getRegion(id : number): Observable<Object> {
    return this.http.get("http://localhost:8080/localisation/getRegion/"+id);
  }

  public updateRegion(id : number, value: any) : Observable<Object> {
    return this.http.put("http://localhost:8080/localisation/updateRegion/"+id, value);
  }

  public deleteRegion(id : number) : Observable<Object> {
    return this.http.delete("http://localhost:8080/localisation/deleteRegion"+id);
  }

}

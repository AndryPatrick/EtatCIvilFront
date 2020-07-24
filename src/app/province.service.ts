import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Province1 } from './province1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/localisation";

  public getListProvince() : Observable<any>{
    return this.http.get("http://localhost:8080/localisation/getAllProvince");
  }

  public addProvince(province)  {
      let url = "http://localhost:8080/localisation/addProvince";
    return this.http.post<Province1>(url,province,{responseType : 'text' as 'json'});
  }

  public  createProvince(province:object) : Observable<Object> {
    return this.http.post("http://localhost:8080/localisation/addProvince",province)
  }

  public getProvince(id:number) : Observable<Object> {
    let url = "http://localhost:8080/localisation/getProvince/"+id;
    return this.http.get(url);
  }

  public deleteProvince(id) : Observable<any>{
    return this.http.delete("http://localhost:8080/localisation/deleteProvince/"+id);
  }

  public updateProvince(id:number, value: any) : Observable<Object> { 
    let url = "http://localhost:8080/localisation/updateProvince/"+id;
      return this.http.put(url, value); 
  }

}

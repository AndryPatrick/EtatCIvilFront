import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commune } from './commune';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

    constructor( private http : HttpClient) { }

    public getListCommune() {
      return this.http.get("http://localhost:8080/localisation/getAllCommune");
    }

    public getCommune() {
      return this.http.get("http://localhost:8080/localisation/getCommune");
    }

    public addCommune(commune) {
      let url = "http://localhost:8080/localisation/addCommune";
      return this.http.post<Commune>(url,commune,{responseType : 'text' as 'json'});
    }
}

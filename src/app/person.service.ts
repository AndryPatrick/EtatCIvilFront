import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  public getListPerson() {
    return this.http.get("http://localhost:8080/person/getAllPerson");
  }

  public addPerson(person) {
    const url = "http://localhost:8080/person/addPerson";
    return this.http.post(url,person,{responseType:'text' as 'json'})
  }
}

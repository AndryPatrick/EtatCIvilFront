import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

//save user
  public doRegistration(user){
    const url = "http://localhost:8080/user/register";
    return this.http.post(url, user,{responseType:'text' as 'json'});
  }

  public getUsers() : Observable<User[]>{
    let result;
    return this.http.get<User[]>("http://localhost:8080/user/getAllUsers").pipe((data => {
      console.log('data--->', data);
     result = data['datas'];
     console.log('result--->', result);
     return result;
    }));
  }

  public getUserById(userId) {
    return this.http.get("http://localhost:8080/user/getUserById/"+userId);
  }
  
  public deleteUser(userId) {
    return this.http.delete("http://localhost:8080/user/deleteUserById/"+userId);
  }

  
  
}

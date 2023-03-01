import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Models/Person.model';
@Injectable({
  providedIn: 'root'
})
export class UserinfoserviceService {
  baseurl = "http://localhost:5130/api/Person";
  public username: string = "ganeshgurram000";
  constructor(private http: HttpClient) { }

  getpersoninfo(): Observable<Person> {
    return this.http.get<Person>(this.baseurl+"/"+this.username);
  }
  getallpersonsinfo(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseurl);
  }
  addperson(person :Person):Observable<Person> {
   return this.http.post<Person>(this.baseurl, person);
  }
}

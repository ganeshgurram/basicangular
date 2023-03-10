import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Models/Person.model';

@Injectable({
  providedIn: 'root'
})
export class UserinfoserviceService {
  baseurl = "http://localhost:5130/api/Person";
  constructor(private http: HttpClient) { }

  getpersoninfo(username: string): Observable<Person> {
    return this.http.get<Person>(this.baseurl + "/" + username);
  }
  getallpersonsinfo(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseurl);
  }
  addperson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseurl, person);
  }
  deleteperson(username: string): Observable<Person> {
    return this.http.delete<Person>(this.baseurl + "/" + username);
  }
  editperson(person: Person): Observable<Person> {
    console.log(person.userName);
    return this.http.put<Person>(this.baseurl + '/' + person.userName, person);
  
  }
}

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

  getpersoninfo(): Observable<Person> {
    return this.http.get<Person>(this.baseurl);
  }
  getallpersonsinfo(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseurl);
  }
}

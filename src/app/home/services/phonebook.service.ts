import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactDetails } from '../interfaces/ContactDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  phonebookApiUrl = environment.phoneBookApiUrl;

  constructor(private http: HttpClient) { }

  getContacts(): Observable<ContactDetails[]> {
    const url = this.phonebookApiUrl + '/users';
    return this.http.get<ContactDetails[]>(url);
  }

}
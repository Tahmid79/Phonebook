import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  phonebookApiUrl = environment.phoneBookApiUrl;

  constructor(private http: HttpClient) { }

  getContacts(){
    const url = this.phonebookApiUrl + '/users';
    return this.http.get(url);
  }

}

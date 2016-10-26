import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('http://localhost:4201/api/contacts')
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get(`http://localhost:4201/api/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

}

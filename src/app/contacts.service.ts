import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import { Contact } from './models/contact';

import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class ContactsService {

  constructor(
    private http: Http,
    @Inject(API_ENDPOINT) private api
  ) { }

  getContacts() {
    return this.http.get(`${this.api}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get(`${this.api}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.api}/contacts/${contact.id}`, contact);
  }

}

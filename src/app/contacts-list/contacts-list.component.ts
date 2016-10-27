import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {

  }

  ngOnInit() {

    /*
    // short form
    this.contacts =
      this.terms$
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.contactsService.search(term))
        .merge(this.contactsService.getContacts());

    // more explicit form
    let initialResults = this.contactsService.getContacts();

    let searchResults =
      this.terms$
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.contactsService.searchRaw(term));

    this.contacts = initialResults.merge(searchResults);
    */

    // with sophisticated search method
    this.contacts =
      this.contactsService.search(this.terms$, 400)
        .merge(this.contactsService.getContacts());

  }

}

import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventBusService, APP_TITLE_CHANGE } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(
    private contactsService: ContactsService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {

    this.eventBusService.emit(APP_TITLE_CHANGE, 'Contacts');

    /*
    // short form with sophisticated search method
    this.contacts =
      this.contactsService.search(this.terms$, 400)
        .merge(this.contactsService.getContacts());
    */

    // more explicit form with sophisticated search method
    let initialResults = this.contactsService.getContacts();

    this.contacts =
      initialResults.merge(
        this.contactsService.search(this.terms$, 400)
      );

  }

}

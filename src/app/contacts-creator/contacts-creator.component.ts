import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService, APP_TITLE_CHANGE } from '../event-bus.service';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private eventBusService: EventBusService,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventBusService.emit(APP_TITLE_CHANGE, 'New Contact');
  }

  save(contact: Contact) {
    this.contactsService.addContact(contact)
      .subscribe(res => {
        if (res.status === 200) {
          this.router.navigate(['/contact']);
        }
      });
  }

}

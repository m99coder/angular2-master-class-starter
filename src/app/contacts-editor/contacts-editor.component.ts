import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{ address: {}};

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(res => {
        if (res.status === 200) {
          this.router.navigate(['/contact', contact.id]);
        }
      });
  }

}

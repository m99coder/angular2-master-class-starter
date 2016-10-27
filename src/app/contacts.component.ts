import { Component, OnInit } from '@angular/core';
import { EventBusService, APP_TITLE_CHANGE } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {

  title: string;

  constructor(private eventBusService: EventBusService) {

  }

  ngOnInit() {
    this.eventBusService
      .observe(APP_TITLE_CHANGE)
      .subscribe(title => this.title = title);
  }

}

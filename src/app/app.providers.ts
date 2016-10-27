import { ContactsService } from './contacts.service';
import { API_ENDPOINT } from './app.tokens';
import { EventBusService } from './event-bus.service';

export const APP_PROVIDERS = [
  {provide: API_ENDPOINT, useValue: 'http://localhost:4201/api'},
  ContactsService,
  EventBusService
];

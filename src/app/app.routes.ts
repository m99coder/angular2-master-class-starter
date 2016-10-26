import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

export const ContactsAppRoutes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component: ContactsDetailComponent}
];

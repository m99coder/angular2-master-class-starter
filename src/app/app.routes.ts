import { Routes } from '@angular/router';

import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const ContactsAppRoutes: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component: ContactsDetailComponent},
  {path: '**', redirectTo: ''}
];

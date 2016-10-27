import { Routes } from '@angular/router';

import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';

export const ContactsAppRoutes: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component: ContactsDetailViewComponent},
  {path: 'contact/:id/edit', component: ContactsEditorComponent},
  {path: 'contacts/new', component: ContactsCreatorComponent},
  {path: '**', redirectTo: ''}
];

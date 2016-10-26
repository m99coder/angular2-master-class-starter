import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import 'rxjs/add/operator/map';

import { ContactsAppComponent } from './contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { ContactsAppRoutes } from './app.routes';

import { ContactsService } from './contacts.service';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsDetailComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}

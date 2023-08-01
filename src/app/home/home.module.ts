import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactDetailsNewComponent } from './components/contact-details-new/contact-details-new.component';
import { ContactAddEditComponent } from './components/contact-add-edit/contact-add-edit.component';

@NgModule({
  declarations: [
    HomeMainComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactDetailsNewComponent,
    ContactAddEditComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

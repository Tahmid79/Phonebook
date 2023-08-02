import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailsNewComponent } from '../contact-details-new/contact-details-new.component';
import { ContactAddEditComponent } from '../contact-add-edit/contact-add-edit.component';
import { ContactDetails } from '../../interfaces/ContactDetails';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  alphabets: string[] = [] ;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabets = alpha.map((x) => String.fromCharCode(x));
  }

  openContactDetails(){
      this.dialog.open(ContactDetailsNewComponent) ;
  }

  addNewContact(){
    this.dialog.open(ContactAddEditComponent) ;
  }

}

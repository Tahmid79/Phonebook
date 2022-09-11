import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

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
      this.dialog.open(ContactDetailsComponent) ;
  }

}

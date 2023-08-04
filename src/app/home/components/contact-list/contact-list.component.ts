import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailsNewComponent } from '../contact-details-new/contact-details-new.component';
import { ContactAddEditComponent } from '../contact-add-edit/contact-add-edit.component';
import { ContactDetails } from '../../interfaces/ContactDetails';
import { PhonebookService } from '../../services/phonebook.service';
import { lastValueFrom } from 'rxjs';

interface AlphabetConfig{
  alphabet: string;
  contacts: ContactDetails[]
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  alphabets: string[] = [] ;
  alphabetConfig: AlphabetConfig[] = [];
  totalCount = 0;
  loading = true;
  constructor(
    public dialog: MatDialog,
    private phonebookService: PhonebookService
  ){}

  ngOnInit(): void {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    // this.alphabets = alpha.map((x) => String.fromCharCode(x));
    this.initData();
  }

  openContactDetails(contact: ContactDetails){
    const dialogRef = this.dialog.open(ContactDetailsNewComponent, {data: contact, autoFocus: false}) ;
    dialogRef.afterClosed().subscribe(result => {
      if(result.isEdited || result.isDeleted){
        this.initData();
      }
    });
  }

  addNewContact(){
    const dialogRef = this.dialog.open(ContactAddEditComponent, {autoFocus: false}) ;
    dialogRef.afterClosed().subscribe(result => {
      if(result.isCreated){
        this.initData();
      }
    });
  }

  async initData(){
    this.loading = true;
    this.alphabetConfig = [];
    try{
      const contactList = await lastValueFrom(this.phonebookService.getContacts());
      contactList.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
      this.totalCount = contactList && contactList.length ? contactList.length : this.totalCount;
      contactList.map( contact => {
        const firstLetter = contact.firstName.charAt(0).toUpperCase();
        const isConfigPresent = this.alphabetConfig.find(item => item.alphabet === firstLetter);
        if(!isConfigPresent){
          const config: AlphabetConfig = {
            alphabet: firstLetter,
            contacts: [contact]
          };
          this.alphabetConfig.push(config);
        }else{
          const config = this.alphabetConfig.find(item => item.alphabet === firstLetter);
          if(config){
            config.contacts.push(contact);
          }
        }
      });
    }catch(error){
    }
    this.loading = false;
  }

  getName(contact: ContactDetails): string{
    const fname = contact.firstName ? contact.firstName : '' ;
    const mname = contact.middleName ? contact.middleName : '' ;
    const lname = contact.lastName ? contact.lastName : '' ;
    const result = `${fname} ${mname} ${lname}`;
    return result;
  }

}

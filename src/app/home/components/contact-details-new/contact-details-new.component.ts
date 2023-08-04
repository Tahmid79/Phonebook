import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactDetails } from '../../interfaces/ContactDetails';
import { ContactAddEditComponent } from '../contact-add-edit/contact-add-edit.component';
import { PhonebookService } from '../../services/phonebook.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-details-new',
  templateUrl: './contact-details-new.component.html',
  styleUrls: ['./contact-details-new.component.scss']
})
export class ContactDetailsNewComponent implements OnInit {

  numbers: string[] = ['+88 017 XXXXXXX' , '+60 011 XXXXXXX'] ;
  phone1 = '+88 017 XXXXXXX' ;
  phone2 = '+60 011 XXXXXXX' ;
  email = 'baybaythegoat@gmail.com' ;
  loading = false;
  info = {infoType: 'Email' , infoValue : 'baybaythegoat@gmail.com'} ;
  dataEdited = false;

  information = [
    // {infoType: 'Email' , infoValue : 'baybaythegoat@gmail.com'},
    {infoType: 'Profile' , infoValue : 'www.linkedin.com/237494505/baybay00'},
    {infoType: 'Address' , infoValue : 'House no. somewhere, Road no. 23'},
  ] ;
  back = `Back` ;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ContactDetails,
    public dialog: MatDialog,
    public matDialogRef: MatDialogRef<ContactDetailsNewComponent>,
    private phonebookService: PhonebookService
  ){}

  ngOnInit(): void {
    if(!this.data){
      this.data = this.sampleContact;
    }
  }

  loremIpsum = `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit.` ;

  sampleContact: ContactDetails = {
    id: "1",
    firstName: 'Bayejeed',
    middleName: '',
    lastName: 'Hasan',
    phone: '+88 017 XXXXXXX',
    email: 'baybaythegoat@gmail.com',
    profile: 'www.linkedin.com/237494505/baybay00',
    address: 'House no. somewhere, Road no. 23',
    note: this.loremIpsum,
  };

  getName(): string{
    const fname = this.data.firstName ? this.data.firstName : '' ;
    const mname = this.data.middleName ? this.data.middleName : '' ;
    const lname = this.data.lastName ? this.data.lastName : '' ;
    const result = `${fname} ${mname} ${lname}`;
    return result;
  }

  openContactDetailsEdit(){
    const dialogRef = this.dialog.open(ContactAddEditComponent, {data: this.data}) ;
    dialogRef.afterClosed().subscribe(result => {
        if(result.isEdited){
          this.getUserData();
        }
    });
  }

  async getUserData(){
    this.loading = true;
    try{
      const user = await lastValueFrom(this.phonebookService.getContactById(this.data.id));
      if(user){
        this.data = user;
      }
    }catch(error){
    }
    this.loading = false;
    this.dataEdited = true;
  }

  close(){
    this.matDialogRef.close({isEdited: this.dataEdited});
  }

}

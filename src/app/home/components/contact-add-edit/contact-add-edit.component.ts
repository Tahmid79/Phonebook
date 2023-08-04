import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactDetails } from '../../interfaces/ContactDetails';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhonebookService } from '../../services/phonebook.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {

  contactFormData = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: [''],
    age: [''],
    phone: [''],
    email: [''],
    profile: [''],
    address: [''],
    note: ['']
  });

  back = `Back` ;
  cancelText="Cancel";
  save="Save";

  isEditMode = false;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: ContactDetails,
      public matDialogRef: MatDialogRef<ContactAddEditComponent>,
      private fb: FormBuilder,
      private phonebookService: PhonebookService
    ) {
        if(data){
          this.initEditFormData();
          this.isEditMode = true;
        }
     }

  ngOnInit(): void {
  }

  initEditFormData(){
    const props = Object.keys(this.data);
    props.map( prop => {
      if(this.data[prop as keyof typeof this.data]){
          this.contactFormData.controls[prop].setValue(this.data[prop as keyof typeof this.data]);
      }
    });
  }

  async saveContactDetails(){
    if(this.contactFormData.invalid)return;
    const contactData: ContactDetails = this.contactFormData.value;
    try{
      let response = null;
      if(this.isEditMode){
        response = await lastValueFrom(this.phonebookService.saveExistingContact(contactData));
        if(response){
          this.matDialogRef.close({isEdited: this.isEditMode});
        }else{
          alert('Could not edit user');
        }
      }else{
        response = await lastValueFrom(this.phonebookService.addNewContact(contactData));
        if(response){
          this.matDialogRef.close({isCreated: true});
        }else{
          alert('Could not add user');
        }
      }
    }catch(error){
      alert('Error');
    }
  }

  cancel(){
    this.matDialogRef.close();
  }

}

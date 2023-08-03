import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactDetails } from '../../interfaces/ContactDetails';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {

  contactFormData = this.fb.group({
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
  cancel="Cancel";
  save="Save";

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: ContactDetails,
      private fb: FormBuilder
    ) {
        if(data){
          this.initEditFormData();
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

  saveContactDetails(){
    const val = this.contactFormData.value;
  }

}

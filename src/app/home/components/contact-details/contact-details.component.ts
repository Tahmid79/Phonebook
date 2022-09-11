import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  numbers: string[] = ['+88 017 XXXXXXX' , '+60 011 XXXXXXX'] ;
  phone1 = '+88 017 XXXXXXX' ;
  phone2 = '+60 011 XXXXXXX' ;
  email = 'baybaythegoat@gmail.com' ;

  information = [
    {infoType: 'Email' , infoValue : 'baybaythegoat@gmail.com'},
    {infoType: 'Profile' , infoValue : 'www.linkedin.com/237494505/baybay00'},
    {infoType: 'Address' , infoValue : 'House no. somewhere, Road no. 23'},
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}

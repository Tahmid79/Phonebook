import { Component, OnInit } from '@angular/core';

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

  info = {infoType: 'Email' , infoValue : 'baybaythegoat@gmail.com'} ;

  information = [
    // {infoType: 'Email' , infoValue : 'baybaythegoat@gmail.com'},
    {infoType: 'Profile' , infoValue : 'www.linkedin.com/237494505/baybay00'},
    {infoType: 'Address' , infoValue : 'House no. somewhere, Road no. 23'},
  ] ;
  back = `Back` ;

  constructor() { }

  ngOnInit(): void {
  }

  loremIpsum = `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit.` ;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  alphabets: string[] = [] ;
  constructor() { }

  ngOnInit(): void {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabets = alpha.map((x) => String.fromCharCode(x));
  }

}

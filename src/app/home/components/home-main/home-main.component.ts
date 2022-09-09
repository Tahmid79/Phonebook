import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  alphabets: string[] = [] ;
  constructor() { }

  ngOnInit(): void {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabets = alpha.map((x) => String.fromCharCode(x));
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeader implements OnInit {

  @Input()
  pageTitle : string;

  constructor() { }

  ngOnInit(): void {
    
  }

}

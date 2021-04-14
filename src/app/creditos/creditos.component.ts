import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class Creditos implements OnInit {

  @Output()
  pageTitle = 'Créditos';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-dinossauro',
  templateUrl: './dinossauro.component.html',
  styleUrls: ['./dinossauro.component.css']
})
export class Dinossauro {

  id: number;
  nome: string;
  altura: number;
  comprimento: number;
  peso: number;

  constructor() { }

}

import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-dinossauro-cadastro',
  templateUrl: './dinossauro-cadastro.component.html',
  styleUrls: ['./dinossauro-cadastro.component.css']
})
export class DinossauroCadastro implements OnInit {

  @Output()
  pageTitle = 'Edição de Dinossauro';

  constructor() { }

  ngOnInit(): void {
  }

}

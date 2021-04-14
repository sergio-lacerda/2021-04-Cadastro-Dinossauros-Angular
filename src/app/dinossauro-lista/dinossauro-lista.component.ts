import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-dinossauro-lista',
  templateUrl: './dinossauro-lista.component.html',
  styleUrls: ['./dinossauro-lista.component.css']
})
export class DinossauroLista implements OnInit {

  @Output()
  pageTitle = 'Cadastro de Dinossauros';
  displayedColumns: string[] = ['Id', 'Nome', 'Altura', 'Comprimento', 'Peso', 'Ações'];
  dinoList = [
    { id: 1, nome: 'Tiranosaurus Rex', altura: 7.3, comprimento: 15.1, peso: 8.6 },
    { id: 2, nome: 'Brontosaurus Magnificent', altura: 7.0, comprimento: 15.0, peso: 8.6 },
    { id: 3, nome: 'Triceratops Horridus', altura: 7.0, comprimento: 15.0, peso: 8.6 }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}

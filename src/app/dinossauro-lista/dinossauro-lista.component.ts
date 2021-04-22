import { Component, Input, OnInit, Output } from '@angular/core';
import { Dinossauro } from '../dinossauro/dinossauro.component';
import { DinossauroDataService } from '../services/dinossauro-data.service';

@Component({
  selector: 'spa-dinossauro-lista',
  templateUrl: './dinossauro-lista.component.html',
  styleUrls: ['./dinossauro-lista.component.css']
})
export class DinossauroLista implements OnInit {

  @Output()
  pageTitle = 'Cadastro de Dinossauros';
  displayedColumns: string[] = ['Id', 'Nome', 'Altura', 'Comprimento', 'Peso', 'Ações'];
  
  dinoList: Dinossauro[] = [];
   
  constructor(private ds: DinossauroDataService) { }

  ngOnInit(): void {
    this.dinoList = this.ds.getAll();
  }

}

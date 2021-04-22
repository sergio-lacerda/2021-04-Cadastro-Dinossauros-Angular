import { Injectable } from '@angular/core';
import { Dinossauro } from '../dinossauro/dinossauro.component';

@Injectable({
  providedIn: 'root'
})
export class DinossauroDataService {

  getAll(): Dinossauro[] {
    return dados_dinossauros;
  }

  getById(id: Number): Dinossauro {
    return dados_dinossauros.find( (dino: Dinossauro) => dino.id === id );
  }

  save(dino: Dinossauro): void {
    if (dino.id){
      const index = dados_dinossauros.findIndex( (d: Dinossauro) => d.id === dino.id );
      dados_dinossauros[index] = dino;
    }
  }

  constructor() { }
}


var dados_dinossauros: Dinossauro[] = [
  {
    "id": 1,
    "nome": "Tyranosaurus rex",
    "altura": 4.00,
    "comprimento": 12.00,
    "peso": 9.00
  },
  {
    "id": 2,
    "nome": "Brachiosaurus altithorax",
    "altura": 12.00,
    "comprimento": 23.00,
    "peso": 80.00
  },
  {
    "id": 3,
    "nome": "Brontosaurus excelsus",
    "altura": 4.50,
    "comprimento": 22.00,
    "peso": 40.00
  },
  {
    "id": 4,
    "nome": "Focinhossauro Rex",
    "altura": 12.36,
    "comprimento": 25.20,
    "peso": 53.67
  }  
];

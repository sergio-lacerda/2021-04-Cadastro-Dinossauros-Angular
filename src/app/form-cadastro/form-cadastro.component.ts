import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dinossauro } from '../dinossauro/dinossauro.component';
import { DinossauroDataService } from '../services/dinossauro-data.service';

@Component({
  selector: 'spa-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  dino: Dinossauro;
   
  constructor(private rotaAtiva: ActivatedRoute, 
              private ds: DinossauroDataService,
              private router: Router) 
  { }

  ngOnInit(): void {
    this.dino = this.ds.getById( +this.rotaAtiva.snapshot.paramMap.get('id') );  
  }

  save(): void {
    this.ds.save(this.dino);
    this.router.navigate(['']);
  }

}

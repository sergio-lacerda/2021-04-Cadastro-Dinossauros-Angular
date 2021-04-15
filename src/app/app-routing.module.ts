import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Creditos } from './creditos/creditos.component';
import { DinossauroCadastro } from './dinossauro-cadastro/dinossauro-cadastro.component';
import { DinossauroLista } from './dinossauro-lista/dinossauro-lista.component';

const routes: Routes = [
  { path: '', component: DinossauroLista },
  { path: 'creditos', component: Creditos },
  { path: 'cadastro', component: DinossauroCadastro }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

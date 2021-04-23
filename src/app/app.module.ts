import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dinossauro } from './dinossauro/dinossauro.component';
import { DinossauroLista } from './dinossauro-lista/dinossauro-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';

import { Creditos } from './creditos/creditos.component';
import { PageHeader } from './page-header/page-header.component';
import { PerfilCardComponent } from './perfil-card/perfil-card.component';
import { DinossauroCadastro } from './dinossauro-cadastro/dinossauro-cadastro.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    Dinossauro,
    DinossauroLista,
    DinossauroCadastro,
    Creditos,
    PageHeader,
    PerfilCardComponent,
    FormCadastroComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dinossauro } from './dinossauro/dinossauro.component';
import { DinossauroLista } from './dinossauro-lista/dinossauro-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { Creditos } from './creditos/creditos.component';
import { PageHeader } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    Dinossauro,
    DinossauroLista,
    Creditos,
    PageHeader    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

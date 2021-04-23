import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dinossauro } from '../dinossauro/dinossauro.component';

@Injectable({
  providedIn: 'root'
})
export class DinossauroDataService {

  private apiUrl: string = 'http://localhost:3000/Dinossauros';

  constructor(private httpClient: HttpClient) { 

  }

  getAll(): Observable<Dinossauro[]> {
    return this.httpClient.get<Dinossauro[]>(this.apiUrl);
  }

  getById(id: Number): Observable<Dinossauro> {
    return this.httpClient.get<Dinossauro>(`${this.apiUrl}/${id}`);
  }

  deleteById(id: Number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  save(dino: Dinossauro): Observable<Dinossauro> {
    if (dino.id){
      return this.httpClient.put<Dinossauro>(`${this.apiUrl}/${dino.id}`, dino);
    }
    else {
      return this.httpClient.post<Dinossauro>(`${this.apiUrl}`, dino);
    }
  }

}
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';

export interface Vaga {

  id: string;
 descricao: string;
}
@Injectable({
  providedIn: 'root'
})


export class VagaService {
  vagaUrl: string;

  constructor( private http: HttpClient) {
    this.vagaUrl = `${environment.apiUrl}/kaspper/vaga/listar`
  }
  list(){
    return this.http.get<Vaga[]>(this.vagaUrl).pipe(
      tap(console.log)
    )
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CandidatoVaga } from '../core/model';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CandidatoVagaService {
  candidatoVagaUrl: string;

  constructor( private http: HttpClient) {
    this.candidatoVagaUrl = `${environment.apiUrl}/kaspper/candidatovaga/cadastrar`
   }

   adicionar(candidatoVaga: CandidatoVaga): Promise<CandidatoVaga> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy')
      .append('Content-Type', 'application/json');

    return this.http.post<CandidatoVaga>(this.candidatoVagaUrl, candidatoVaga, { headers })
      .toPromise();
  }
}

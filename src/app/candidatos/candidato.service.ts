import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Candidato } from '../core/model';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  candidatoUrl: string;

  constructor(
    private http: HttpClient

  ) {
    this.candidatoUrl = `${environment.apiUrl}/kaspper/candidato/cadastrar`
  }



  adicionar(candidato: Candidato): Promise<Candidato> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy')
      .append('Content-Type', 'application/json');

    return this.http.post<Candidato>(this.candidatoUrl, candidato, { headers })
      .toPromise();
  }


}

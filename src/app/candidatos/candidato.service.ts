import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Candidato, Vaga } from '../core/model';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  candidatoUrl: string;
  vagaUrl: string;

  constructor(
    private http: HttpClient

  ) {
    this.candidatoUrl = `${environment.apiUrl}/kaspper/candidato/cadastrar`,
    this.vagaUrl = `${environment.apiUrl}/kaspper/vaga/listar`
  }



  adicionar(candidato: Candidato): Promise<Candidato> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy')
      .append('Content-Type', 'application/json');

    return this.http.post<Candidato>(this.candidatoUrl, candidato, { headers })
      .toPromise()
     
  }

  listarVagas(){
   // return this.http.get<Vaga[]>(this.vagaUrl);
    return this.http.get(this.vagaUrl)
    .pipe(
      map((response:any) => response.map((item: { [x: string]: any; }) => item['descricao']))
    )
}
 list(){
   return this.http.get<Vaga[]>(this.vagaUrl);
 }

}





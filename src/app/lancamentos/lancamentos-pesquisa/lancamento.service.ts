import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Vaga } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/kaspper/vaga/listar';

  constructor(private http: HttpClient) { }
  listarTodas() : Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');

    return this.http.get(this.lancamentosUrl, { headers })
      .toPromise()
      .then((response: any) => response['content']);
  }
}

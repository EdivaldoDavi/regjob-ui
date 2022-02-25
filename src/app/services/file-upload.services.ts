import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080/kaspper/candidato/anexo';

  constructor(private http: HttpClient) { }
  upload(anexo: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('anexo', anexo, anexo.name);
    //console.log(Event);
    const req = new HttpRequest('POST', `${this.baseUrl}`, formData,  {
      reportProgress: true,
      responseType: 'text',


    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}

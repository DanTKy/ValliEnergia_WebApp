import { environment } from './../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormrequestService {
  constructor(private http: HttpClient) { }

  submitForm(form : any){
    alert(form);
    const headers = new HttpHeaders().set('Content-type', 'application/json; charset=utf-8');
    let payload = JSON.stringify(form);
    return this.http.post(`${environment.apiUrl}FormReq`, payload, {headers: headers}).subscribe(response => alert("Richiesta inviata correttamente"), error => alert("Errore: richiesta non inviata"));
  }
}

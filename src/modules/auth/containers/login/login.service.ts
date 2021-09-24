import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { RequestLoginModel } from '../login/requestLoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCliente: HttpClient) { }

  public Login(requestLoginModel: RequestLoginModel): Observable<any>{
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
   
    //return this.httpCliente.get<any>(`${environment.UrlApi}home/get`);
    return this.httpCliente.post<any>(`${environment.UrlApi}home/login`, requestLoginModel);
  }
}
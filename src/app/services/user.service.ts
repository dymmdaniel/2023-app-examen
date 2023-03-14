import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public registrarUsuario(user:any){
    return this.http.post(`${baseUrl}/usuario/`,user);
  }
}

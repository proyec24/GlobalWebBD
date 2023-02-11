import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:4000/usuario/login';
  url2: string = 'http://localhost:4000/usuario/cliente';
  url3: string = 'http://localhost:4000/usuario';
  numero = 0;
  constructor(private http: HttpClient) {

  }

  loginUsuario(usuario: any) {
    return this.http.post<any>(this.url, usuario);
  }
  register(usuario: any) {
    return this.http.post<any>(this.url2, usuario);
  }
  getUser(id) {
    return this.http.get(this.url3 + '/' + id);
  }
}

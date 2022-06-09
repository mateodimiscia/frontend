import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../usuario';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
private path = "http://localhost:8080/user/";
  constructor(private http: HttpClient) { }
respuesta="";




  prueba(){
    return this.http.get<Task[]>(`${this.path}`+"all");
  }

  registrarUsuario(usuario:Usuario):Observable<Object>{
    return this.http.post(`${this.path}`+"registrarUsuario",usuario);
  }
}

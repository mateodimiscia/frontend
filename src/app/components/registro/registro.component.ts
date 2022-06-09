import { ConfigService } from '../config/config.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor(private configService:ConfigService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.usuario);
  };


  guardarUsuario(){
    this.configService.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
    },error => console.log(error))
  }

  onSubmit(){
    this.guardarUsuario();
  }
}

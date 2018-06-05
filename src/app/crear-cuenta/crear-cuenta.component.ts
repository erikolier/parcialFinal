import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  usuario:any={
    nick:'',
    pass:'',
    rumbaCoin:500
  }
  usuarios:any;
  constructor(private service: UsuarioServiceService,private router:Router) { 
    this.service.ListaUsuario().subscribe(user=>{
      this.usuarios=user;
    })
  }

  ngOnInit() {
  }

  agregar(){
    if(this.usuario.nick!='' && this.usuario.pass!=''){
     this.service.agregarUsuario(this.usuario);
     alert("Cuenta creada con exito");
     this.router.navigate(['/principal']);
    }else{
      alert("Uno de los campos está vacío");
    }
    this.usuario.nick='';
    this.usuario.pass='';
    this.usuario.rumbaCoin=500;
  }
}

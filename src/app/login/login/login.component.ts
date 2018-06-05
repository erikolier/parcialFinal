import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { NgForOf } from '@angular/common';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:any;
  constructor(private service: UsuarioServiceService,private router:Router) {
    this.service.ListaUsuario().subscribe(user=>{
      this.usuario=user;
      
    })
   }

  ngOnInit() {
  }
  iniciarSesion(nick:string,pass:string){
    
    
      for (let index=0;index<this.usuario.length;index++){
        if(this.usuario[index].nick===nick && this.usuario[index].pass === pass){
          alert("Bienvenido " + nick);
          this.router.navigate(['/principalU/'+this.usuario[index].id]);
          break;
        }else if(index === (this.usuario.length-1) && this.usuario[index].nick != nick && this.usuario[index].pass != pass){
          alert("cuenta o contraseña incorrecta");
          break;
        }
        else if(index === (this.usuario.length-1) && this.usuario[index].nick === nick && this.usuario[index].pass != pass){
          alert("cuenta o contraseña incorrecta");
          break;
        }else if(nick==='' || pass==='' ){
          alert("Uno de los campos está vacío o incorrecto");
          break;
        }    

      }
    
  }
  }


import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario-service.service';
@Component({
  selector: 'app-principal-usuario',
  templateUrl: './principal-usuario.component.html',
  styleUrls: ['./principal-usuario.component.css']
})
export class PrincipalUsuarioComponent implements OnInit {
  usuario:any;
  id:string;
  constructor(private service: UsuarioServiceService,private router:Router,private route:ActivatedRoute) { 
    route.params.subscribe(params=>{this.id=params['id'];});
    this.service.ListaUsuario().subscribe(user=>{
      for(let index=0;index<user.length;index++){
        if(user[index].id===this.id){
          this.usuario=user[index];
          break;
        }else if(index+1===user.length && user[index].id !=this.id){
          alert("inicie sesion correctamente, será redireccionado");
          this.router.navigate(['/principal/']);
        }
      }
      
      
    })
  }

  ngOnInit() {
  }
  verCredito(){
    this.router.navigate(['/saldo/'+this.id]);
  }
  crearParche(){
    this.router.navigate(['/crear/'+this.id]);
  }
  buscarParche(){
    this.router.navigate(['/buscar/'+this.id]);
  }
  misParches(){
    this.router.navigate(['/misParches/'+this.id]);
  }
}

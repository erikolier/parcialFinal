import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario-service.service';
@Component({
  selector: 'app-agregar-credito',
  templateUrl: './agregar-credito.component.html',
  styleUrls: ['./agregar-credito.component.css']
})
export class AgregarCreditoComponent implements OnInit {
  usuario:any;
  id:string;
  nick:string;
  pass:string;
  rumbaCoin:number;
  editarUsuario:any={
    id:this.id,
    nick:this.nick,
    pass:this.pass,
    rumbaCoin:''
  }
  constructor(private service: UsuarioServiceService,private router:Router,private route:ActivatedRoute) { 
    route.params.subscribe(params=>{this.id=params['id'];});
    this.service.ListaUsuario().subscribe(user=>{
      
      for(let index=0;index<user.length;index++){
        if(user[index].id===this.id){
          
          this.usuario=user[index];
          this.nick=user[index].nick;
          this.pass=user[index].pass;
          this.rumbaCoin=user[index].rumbaCoin;
          console.log(this.usuario);
          
          break;
        }else if(index+1===user.length && user[index].id !=this.id){
          alert("inicie sesion correctamente, será redireccionado");
          this.router.navigate(['/principal/']);
        }
      }
      
      
    })
  }
 
  
  

  ngOnInit() {
    this.service.ListaUsuario();
  }
  editar(usuario){
    this.editarUsuario=usuario;
    
  }
  agregarUsuarioEditado(){
    const i=this.rumbaCoin;
    this.editarUsuario.rumbaCoin=this.service.suma(i,this.editarUsuario.rumbaCoin);
    
    if(this.editarUsuario.rumbaCoin>=0 && this.editarUsuario.rumbaCoin<=10000 ){
    this.service.editarUsuario(this.editarUsuario);
    alert("Rumba Coins agregados con exito");
    }else if(this.editarUsuario.rumbaCoin<0 || this.editarUsuario.rumbaCoin>10000 ){
    alert("no puedes añadir menos de 0 rumba coins o más de 10000")
    }
  }
  volver(){
    this.router.navigate(['/principalU/'+this.id]);
  }
  
}

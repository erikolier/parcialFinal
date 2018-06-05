import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcheServiceService } from '../services/parche-service.service';
import { ParcheUsuarioService } from '../services/parche-usuario.service';

@Component({
  selector: 'app-ver-parche',
  templateUrl: './ver-parche.component.html',
  styleUrls: ['./ver-parche.component.css']
})
export class VerParcheComponent implements OnInit {
  id:string;
  idParche:string;
  usuario:any;
  parche:any;
  constructor(private service: UsuarioServiceService,private router:Router,private route:ActivatedRoute,
    private servicio: ParcheServiceService) { 
      route.params.subscribe(params=>{this.id=params['id'];});
      route.params.subscribe(params=>{this.idParche=params['parche'];});
      this.service.ListaUsuario().subscribe(user=>{
        
        for(let index=0;index<user.length;index++){
          if(user[index].id===this.id){
            
            this.usuario=user[index];
            console.log(this.usuario);
            break;
          }else if(index+1===user.length && user[index].id !=this.id){
            alert("inicie sesion correctamente, será redireccionado");
            this.router.navigate(['/principal/']);
          }
        }
        
        
      })
      this.servicio.ListaParche().subscribe(parch=>{
        this.parche=parch;
        for(let index=0;index<parch.length;index++){
          if(parch[index].id===this.idParche){
            
           
            console.log(this.parche);
            break;
          }else if(index+1===parch.length && parch[index].id !=this.id){
            alert("inicie sesion correctamente, será redireccionado");
            this.router.navigate(['/principal/']);
          }
        }
        
        
      })
    }

  ngOnInit() {
  }
  iniciarSesion(contra:string){
    
    
    for (let index=0;index<this.parche.length;index++){
      if(this.parche[index].id===this.idParche && this.parche[index].contra === contra){
        alert("Bienvenido a" + this.parche[index].nombre);
        this.router.navigate(['/infoParche/'+this.id+'/'+this.idParche]);
        break;
      }else if(index === (this.parche.length-1) && this.parche[index].id!= this.idParche && this.parche[index].contra != contra){
        alert(" contraseña incorrectaa");
        break;
      }
      else if(index === (this.parche.length-1) && this.parche[index].id === this.idParche && this.parche[index].contra != contra){
        alert("contraseña incorrecta");
        break;
      }else if(contra==='' ){
        alert("Uno de los campos está vacío o incorrecto");
        break;
      }    

    }
  
}
volver(){
  this.router.navigate(['/principalU/'+this.id]);
}
}

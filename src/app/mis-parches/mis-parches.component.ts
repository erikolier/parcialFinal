import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcheServiceService } from '../services/parche-service.service';
import { ParcheUsuarioService } from '../services/parche-usuario.service';

@Component({
  selector: 'app-mis-parches',
  templateUrl: './mis-parches.component.html',
  styleUrls: ['./mis-parches.component.css']
})
export class MisParchesComponent implements OnInit {

  id:string;
  usuario:any;
  parche:any={
    nick:'',
    parche:''
  }
  lista:any;
  nick:string;
  idParche:string;
  parches:any;
  constructor(private service: UsuarioServiceService,private router:Router,private route:ActivatedRoute,
    private servicio: ParcheServiceService,private servicioParche: ParcheUsuarioService) { 
      route.params.subscribe(params=>{this.id=params['id'];});
      this.service.ListaUsuario().subscribe(user=>{
        
        for(let index=0;index<user.length;index++){
          if(user[index].id===this.id){
            this.nick=user[index].nick;
            this.usuario=user[index];
            console.log(this.nick);
            break;
          }else if(index+1===user.length && user[index].id !=this.id){
            alert("inicie sesion correctamente, será redireccionado");
            this.router.navigate(['/principal/']);
          }
        }
        
        
      })
     
      this.servicioParche.ListaParcheU().subscribe(item=>{
        
        this.parche=item;
        console.log(this.parche[0].nick);
        for(let index=0;index<this.parche.length;index++){
        if(this.parche[index].nick===this.nick){
          this.lista=this.parche;
          break;
        }else if(this.parche[index].nick!=this.nick && index+1===this.parche.lenght){
          alert("usted no ha consignado en ningun parche");
        }
      }
        console.log(this.lista);
      })
    }
  ngOnInit() {
  }
  buscar(item){
    this.servicio.ListaParche().subscribe(parch=>{
        
      for(let index=0;index<parch.length;index++){
        if(parch[index].nombre===item.parche) {
          this.parches=item;
          this.idParche=this.parches.id;
          
          this.router.navigate(['/verParches/'+this.id+'/'+this.idParche]);
          break;
        } 
        
        
      }
      
      
    })
    
  }
  volver(){
    this.router.navigate(['/principalU/'+this.id]);
  }
}

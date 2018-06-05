import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcheServiceService } from '../services/parche-service.service';


@Component({
  selector: 'app-info-parche',
  templateUrl: './info-parche.component.html',
  styleUrls: ['./info-parche.component.css']
})
export class InfoParcheComponent implements OnInit {
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
        
        for(let index=0;index<parch.length;index++){
          if(parch[index].id===this.idParche){
            
            this.parche=parch[index];
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

}

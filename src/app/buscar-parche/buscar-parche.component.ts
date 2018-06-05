import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcheServiceService } from '../services/parche-service.service';


@Component({
  selector: 'app-buscar-parche',
  templateUrl: './buscar-parche.component.html',
  styleUrls: ['./buscar-parche.component.css']
})
export class BuscarParcheComponent implements OnInit {
  id:string;
  usuario:any;
  parche:any;
  constructor(private service: UsuarioServiceService,private router:Router,private route:ActivatedRoute,
    private servicio: ParcheServiceService) { 
      route.params.subscribe(params=>{this.id=params['id'];});
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
      this.servicio.ListaParche().subscribe(item=>{
        this.parche=item;
        console.log(this.parche);
      })
    }

  ngOnInit() {
  }
  
  buscar(item){
    
    this.router.navigate(['/verParches/'+this.id+'/'+item.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcheServiceService } from '../services/parche-service.service';


@Component({
  selector: 'app-crear-parche',
  templateUrl: './crear-parche.component.html',
  styleUrls: ['./crear-parche.component.css']
})
export class CrearParcheComponent implements OnInit {
  id:string;
  usuario:any;
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
  }
  parche:any={
    contra:'',
    descripcion:'',
    nombre:'',
    parcheCompleto:false,
    valorActual:0,
    valorMinimo:'',
    valorObjetivo:''
  }
  ngOnInit() {
  }
  agregar(){
    if(this.parche.contra!='' && this.parche.descripcion !='' && this.parche.nombre != '' && 
    this.parche.valorMinimo!='' && this.parche.valorObjetivo !=''){
      
      this.servicio.agregarParche(this.parche);
      alert("parche creado con éxito")
      this.router.navigate(['/principalU/'+this.id]);
      
    }else{
      alert("no ej posible");
    }
  }
  volver(){
    this.router.navigate(['/principalU/'+this.id]);
  }
}

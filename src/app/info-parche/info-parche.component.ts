import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcheServiceService } from '../services/parche-service.service';
import { ParcheUsuarioService } from '../services/parche-usuario.service';


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
  parcheUsuario:any={
    nick:'',
    parche:''
  }
  rumbaCoin:Number;
  parcheCompleto:boolean;
  valorActual:Number;
  nick:string;
  pass:string;
  contra:string;
  descripcion:string;
  nombre:string;
  valorMinimo:number;
  valorObjetivo:number;
  nombrePU:string;
  parchePU:string;
  constructor(private service: UsuarioServiceService,private router:Router,private route:ActivatedRoute,
    private servicio: ParcheServiceService,private servicioParchUs:ParcheUsuarioService) { 
      route.params.subscribe(params=>{this.id=params['id'];});
      route.params.subscribe(params=>{this.idParche=params['parche'];});
      
      this.service.ListaUsuario().subscribe(user=>{
        
        for(let index=0;index<user.length;index++){
          if(user[index].id===this.id){
            this.nick=user[index].nick;
            this.pass=user[index].pass;
            this.nombrePU=user[index].nick;
            this.usuario=user[index];
            this.rumbaCoin=user[index].rumbaCoin;

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
            this.parchePU=parch[index].nombre;
            this.contra=parch[index].contra;
            this.descripcion=parch[index].descripcion;
            this.nombre=parch[index].nombre;
            this.valorMinimo=parch[index].valorMinimo;
            this.valorObjetivo=parch[index].valorObjetivo;
            this.parche=parch[index];
            this.valorActual=parch[index].valorActual;
            console.log(this.parche);
            break;
          }else if(index+1===parch.length && parch[index].id !=this.id){
            alert("inicie sesion correctamente, será redireccionado");
            this.router.navigate(['/principal/']);
          }
        }
        
        
      })
      this.servicioParchUs.ListaParcheU().subscribe(UP=>{
        
        for(let index=0;index<UP.length;index++){
          if(UP[index].nick===this.nombrePU){
              alert("ya ha consignado aqui");
          }else if(UP[index].nick != this.nombrePU && index+1===UP.length){
            alert("no ha consignado aca");
            this.parcheUsuario.nick=this.nombrePU;
            this.parcheUsuario.parche=this.parchePU;
            console.log(this.parcheUsuario);
          }
        }
        
        
      })
      
    }

 
  ngOnInit() {
    
  }
  
  editarUsuario:any={
    id:this.id,
    nick:this.nick,
    pass:this.pass,
    rumbaCoin:''
  }
  editarParche:any={
    id:this.idParche,
    contra:this.contra,
    descripcion:this.descripcion,
    nombre:this.nombre,
    parcheCompleto:'',
    valorActual:'',
    valorMinimo:this.valorMinimo,
    valorObjetivo:this.valorObjetivo
  }
  
  editar(parche,usuario){
    this.editarParche=parche;
    this.editarUsuario=usuario;
  }
  agregarParcheYUsuarioEditado(){
    if(this.rumbaCoin<this.editarParche.valorActual){
      alert("no tiene suficientes rumba coins");
    }else if(this.editarParche.valorActual<this.editarParche.valorMinimo){
      alert("el valor minimo a consignar es de "+this.editarParche.valorMinimo);
    }else if(this.editarParche.valorActual>=this.editarParche.valorMinimo){
      let i=this.servicio.suma(this.editarParche.valorActual,this.valorActual);
      let o=this.service.resta(this.rumbaCoin,this.editarParche.valorActual);
      if(i>this.valorObjetivo){
      
        this.editarParche.parcheCompleto=true;
        this.editarParche.valorActual=i;
        this.editarUsuario.rumbaCoin=o;
        this.servicio.editarParche(this.editarParche);
        this.service.editarUsuario(this.editarUsuario);
        if(this.parcheUsuario.parche===this.parchePU){
          this.servicioParchUs.agregarParche(this.parcheUsuario);
          alert("se ha agregado correctamente a sus parches");
        }
        alert("Transaccion completada correctamente");
      
      }else{
        this.editarParche.parcheCompleto=false;
        this.editarParche.valorActual=i;
        this.editarUsuario.rumbaCoin=o;
        this.servicio.editarParche(this.editarParche);
        this.service.editarUsuario(this.editarUsuario);
        if(this.parcheUsuario.parche===this.parchePU){
          this.servicioParchUs.agregarParche(this.parcheUsuario);
          alert("se ha agregado correctamente a sus parches");
        }
        alert("Transaccion completada correctamente, no se ha completado el valor objetivo");
      }
    }
  }
  volver(){
    this.router.navigate(['/verParches/'+this.id+'/'+this.idParche]);
  }
}

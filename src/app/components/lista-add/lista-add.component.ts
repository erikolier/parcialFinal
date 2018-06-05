import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {
  item:any={
    name:'' //el name del html corresponde a este name :v
  }

  constructor(private servicio: ConexionService) {

   }

  ngOnInit() {
  }
  agregar(){
    this.servicio.AgregarItem(this.item);
    this.item.name='';
  }
}

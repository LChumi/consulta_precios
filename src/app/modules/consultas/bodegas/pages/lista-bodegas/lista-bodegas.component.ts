import { Component, OnInit } from '@angular/core';
import { Bodega } from 'src/app/core/models/bodega';
import { BodegaService } from '../../services/bodega.service';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-bodegas',
  templateUrl: './lista-bodegas.component.html',
  styleUrls: ['./lista-bodegas.component.css']
})
export class ListaBodegasComponent implements OnInit {

  selectedBodega!: Bodega;
  lista_bodegas:Bodega[]=[];
  id_usuario:any;
  id_empresa:any;

  constructor(private bodegaService:BodegaService,private router:Router,private dataSvc:DataService) { }

  ngOnInit(): void {
    this.dataSvc.selectedUser$.subscribe(user => {
      this.id_usuario=user.usr_codigo;
      this.id_empresa=user.usr_empresa_def;
      this.listarBodegas();
    });
  }

  listarBodegas():void{
    this.bodegaService.getBodegas(this.id_usuario,this.id_empresa).subscribe(
      (listarBodegas:Bodega[])=> this.lista_bodegas=listarBodegas
    )
  }

  id_bod:any
  seleccionarBod(bodega:Bodega):void{
    this.dataSvc.setBodega(bodega);
    this.router.navigate(['Consultas/consulta_precios'])
  }

}

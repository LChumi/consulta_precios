import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/core/models/producto';
import { URL_IMAGE } from 'src/assets/config';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-consulta-productos',
  templateUrl: './consulta-productos.component.html',
  styleUrls: ['./consulta-productos.component.css']
})
export class ConsultaProductosComponent implements OnInit {

  imageUrl!:string;
  producto:Producto=new Producto();
  id_bod:any;

  constructor(private productoServie:ProductosService,private dataSvc:DataService) { }

  ngOnInit(): void {
    this.dataSvc.selectedBodega$.subscribe(bodega =>{
      this.id_bod=bodega.bod_codigo;
    })
    }



  mostrarProducto(): void {
    this.productoServie.getProducto(this.barra, this.id_bod).subscribe(
      (producto: Producto) => {
        this.producto = producto;
        console.log(this.producto); 
      }
    );
    this.imageUrl=URL_IMAGE+this.barra+'.jpg'
    console.log(this.imageUrl)
  }
  
  barra: string = '';

  clearInput(event: any) {
    if (event.keyCode === 13) {
      const input = event.target;
      if (input.value) {
        this.barra = input.value;
        input.value = ''; 
      }
    }
  }
  
}

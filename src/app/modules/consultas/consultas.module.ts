import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';

import { ConsultaProductosComponent } from './productos/pages/consulta-productos/consulta-productos.component';
import { ListaBodegasComponent } from './bodegas/pages/lista-bodegas/lista-bodegas.component';

import { FormsModule } from '@angular/forms';
import { ImagenRotaDirective } from 'src/app/directives/imagen-rota.directive';


@NgModule({
  declarations: [
    ListaBodegasComponent,
    ConsultaProductosComponent,
    ImagenRotaDirective
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule
  ]
})
export class ConsultasModule { }

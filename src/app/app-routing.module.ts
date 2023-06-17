import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path:'Cumpleaños',
    loadChildren: () => import('./modules/home/home.module').then( m=> m.HomeModule)
  },
  {
    path: 'Consultas',
    loadChildren:() => import('./modules/consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {
    path:'**',
    redirectTo:'inicio'
  },

];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule 
  ]
})
export class AppRoutingModule { }

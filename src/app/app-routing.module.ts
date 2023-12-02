import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaProveedoresComponent } from './modulo-proveedores/tabla-proveedores/tabla-proveedores.component';
import { FormularioProveedoresComponent } from './modulo-proveedores/formulario-proveedores/formulario-proveedores.component';

const routes: Routes = [
  {path: '', component: TablaProveedoresComponent},
  {path: 'proveedores', component: TablaProveedoresComponent},
  {path: 'proveedores/form', component: FormularioProveedoresComponent},
  {path: 'proveedores/form/:rfc', component: FormularioProveedoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

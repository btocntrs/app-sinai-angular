import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaProveedoresComponent } from './tabla-proveedores/tabla-proveedores.component';
import { FormsModule } from '@angular/forms';
import { ProveedoresService } from './proveedores.service';
import { FormularioProveedoresComponent } from './formulario-proveedores/formulario-proveedores.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TablaProveedoresComponent,
    FormularioProveedoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TablaProveedoresComponent,
    FormularioProveedoresComponent
  ],
  providers:[
    ProveedoresService
  ]
})
export class ProveedoresModule { }
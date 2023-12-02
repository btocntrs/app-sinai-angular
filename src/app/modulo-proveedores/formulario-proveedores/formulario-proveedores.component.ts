import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/modelos/proveedor';
import { ProveedoresService } from '../proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-proveedores',
  templateUrl: './formulario-proveedores.component.html',
  styleUrls: ['./formulario-proveedores.component.css']
})
export class FormularioProveedoresComponent implements OnInit {

  public titulo: string = 'Nuevo Proveedor';
  public proveedor: Proveedor = new Proveedor("","","");
  public update: Boolean = false;
  
  public errors: string[] = [];

  constructor(private proveedoresService: ProveedoresService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.loadProveedor();
  }

  private loadProveedor(){
    this.activatedRoute.params.subscribe(
      params => {
        let rfc = params['rfc'];
        console.log(rfc)

        if(rfc){
          this.proveedoresService.getProveedorByRFC(rfc).subscribe(
            proveedor => this.proveedor = proveedor
          );
        }
        else{
          this.update = true
        }
      }
    );
  }

  saveProveedor(): void{
    this.proveedoresService.saveProveedor(this.proveedor).subscribe(
      proveedor => {
        this.router.navigate(['/proveedores']);
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nuevo proveedor guardado',
          text: `Proveedor guardado satisfactoriamente!`,
        });

      },error => {
          this.errors = error.error.errors as string[];
          console.error(`Error ${error.status}`);
          console.error(this.errors);
        }
      
    );
  }

  updateProveedor(): void{
    this.proveedoresService.updateProveedor(this.proveedor).subscribe(
      proveedor => {
        this.router.navigate(['/proveedores']);
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Proveedor actualizado',
          text: `Proveedor actualizado exitosamente!`,
        });

      },error => {
          this.errors = error.error.errors as string[];
          console.error(`Error ${error.status}`);
          console.error(this.errors);
        }
      
    );
  }

  cancel(){
    this.router.navigate(['/proveedores']);
  }

}

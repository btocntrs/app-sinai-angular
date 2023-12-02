import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/modelos/proveedor';
import { ProveedoresService } from '../proveedores.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})
export class TablaProveedoresComponent implements OnInit, OnDestroy{

  @Input() 
  nombreTabla: string = "Tabla de proveedores"

  listOfProveedores!: Proveedor[];
  listOfProveedoresSubscription!: Subscription;

  constructor(private proveedoresService: ProveedoresService){}

  ngOnInit(): void {
    this.listOfProveedoresSubscription = this.proveedoresService.getProveedores().subscribe(
      listOfProveedores => this.listOfProveedores = listOfProveedores
    );
  }

  ngOnDestroy(): void {
    this.listOfProveedoresSubscription.unsubscribe()
  }

  deleteProveedor(proveedor: Proveedor){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })


    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.proveedoresService.deleteProveedor(proveedor.rfc).subscribe(
          response => {

            const proveedorIndex = this.listOfProveedores.indexOf(proveedor);
            this.listOfProveedores.splice(proveedorIndex, 1);

            Swal.fire(          
              'Borrado!',
              'El proveedor ha sido borrado con exito.',
              'success'
            )
            
          }

        );
        
      }
    }) 
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Proveedor } from '../modelos/proveedor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  //private urlEndPoint: string = 'http://34.229.18.14:8000/proveedores';
  private urlEndPoint: string = 'http://localhost:8000/proveedores';

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private router: Router) { }

  getProveedores(): Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(this.urlEndPoint);
  }

  saveProveedor(proveedor: Proveedor): Observable<Proveedor>{
    return this.httpClient.post<Proveedor>(this.urlEndPoint, proveedor, {headers: this.httpHeaders}).pipe(
      catchError(error => {

        if(error.status == 400){
          return throwError(() => error);
        }

        console.log(error);

        Swal.fire({
          icon: "error",
          title: error.error.msg,
          text: error.error.error
        });

        return throwError(() => error);
      })
    );
  }

  getProveedorByRFC(rfc: string): Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(`${this.urlEndPoint}/${rfc}`).pipe(
      catchError(error => {
        this.router.navigate(['/proveedores']);

        console.log(error);

        Swal.fire({
          icon: "error",
          title: error.error.msg,
          text: error.error.error
        });

        return throwError(() => error);
      })
    );
  }

  updateProveedor(proveedor: Proveedor): Observable<Proveedor>{
    return this.httpClient.put<Proveedor>(this.urlEndPoint, proveedor, {headers: this.httpHeaders}).pipe(
      catchError(error => {

        if(error.status == 400){
          return throwError(() => error);
        }

        console.log(error);

        Swal.fire({
          icon: "error",
          title: error.error.msg,
          text: error.error.error
        });

        return throwError(() => error);
      })
    );
  }

  deleteProveedor(rfc: string): Observable<Proveedor>{
    return this.httpClient.delete<Proveedor>(`${this.urlEndPoint}/${rfc}`, {headers: this.httpHeaders}).pipe(
      catchError(error => {

        console.log(error);

        Swal.fire({
          icon: "error",
          title: error.error.msg,
          text: error.error.error
        });

        return throwError(() => error);
      })
    );
  }

}

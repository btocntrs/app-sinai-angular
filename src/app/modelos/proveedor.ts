export class Proveedor {
    id?: number;
    rfc: string;
    razon_social: string;
    nombre_comercial?: string;
    productos: string;
    banco?: string;
    cuenta?: string;
    telefono?: string;

    constructor(
        rfc: string,
        razon_social: string,
        productos: string,
        id?: number,
        nombre_comercial?: string,
        banco?: string,
        cuenta?: string,
        telefono?: string
    ) {
        this.id = id;
        this.rfc = rfc;
        this.razon_social = razon_social;
        this.nombre_comercial = nombre_comercial;
        this.productos = productos;
        this.banco = banco;
        this.cuenta = cuenta;
        this.telefono = telefono;
    }
}

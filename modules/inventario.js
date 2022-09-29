export default class Inventario{
    constructor() {
        this.productos = new Array();
    }
    agregar(producto) {
        this.productos.push(producto);
    }
    agregarPosicion(producto, posicion) {
        let pIni = this.productos[posicion - 1];
        if (posicion < this.productos.length+1) {
            this.productos[posicion - 1] = producto;
            for (let i = posicion + 1; i < this.productos.length; i++) {
                let pTemp = this.productos[i];
                this.productos[i] = pIni;
                pIni = pTemp;
            }
        } else
            alert("No existe la posición");
    }
    eliminar(codigo) {
        let elemento = 0, product = "";
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
                    for (let o = i; o < this.productos.length - 1; o++)
                        this.productos[o] = this.productos[o + 1];

                    this.productos[this.productos.length - 1] = elemento;
                    this.productos.pop();
                    product = `El elemento con código ${codigo} ha sido eliminado`;
                }
        }
        return product;
    }
    listado() {
        let str = '<tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td></tr >';
        if (this.productos.length != 0){
            for (let i = 0; i <= this.productos.length - 1; i++)
                str += `<tr><td>${this.productos[i].codigo} </td> <td>${this.productos[i].nombre} </td><td> ${this.productos[i].cantidad} </td><td>${this.productos[i].costo}</td></tr>`;
            return str;
        } else {
            alert("No hay productos en el inventario");
            return str = '';
        }
    }
    listadoInverso() {
        let str = '<tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td></tr >';
        let aux = 0;
        //Para evitar que se modifique el arreglo original
        for (let k = 0; k < this.productos.length / 2; k++){
            aux = this.productos[k];
            this.productos[k] = this.productos[this.productos.length - 1 - k];
            this.productos[this.productos.length - 1 - k] = aux;
        }
        if (this.productos.length != 0) {
            for (let i = 0; i <= this.productos.length-1; i++){
                str += `<tr><td>${this.productos[i].codigo} </td> <td>${this.productos[i].nombre} </td><td> ${this.productos[i].cantidad} </td><td>${this.productos[i].costo}</td></tr>`;
            }
            return str;
        } else {
            alert("No hay productos en el inventario");
            return str = "";
        }
    }
    buscar(codigo) {
        for (let i = 0; i <= this.productos.length; i++)
            if (this.productos[i])
                if (codigo === this.productos[i].codigo)
                    return this.productos[i];
    }
}
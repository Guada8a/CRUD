import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

let btnAgregar = document.getElementById("btnAgregar");
let btnAgregarPosicion = document.getElementById("btnAgregarPosicion");
let btnBuscar = document.getElementById("btnBuscar");
let btnModificar = document.getElementById("btnModificar");
let btnEliminar = document.getElementById("btnEliminar");
let btnListar = document.getElementById("btnListar");
let btnListarInverso = document.getElementById("btnListarInverso");
let operacion = document.getElementById("operacion");

let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let costo = document.getElementById("costo");
let cantidad = document.getElementById("cantidad");
let mostrar1 = false, mostrar2 = false, mostrar3 = false;

//OCULTAR SECCIONES
document.getElementById("agregarh3").addEventListener("click", () => {
    if (!mostrar1) {
        document.getElementById("crud_agregar").style.display = "block";
        mostrar1 = true;
    } else {
        document.getElementById("crud_agregar").style.display = "none";
        mostrar1 = false;
    } 
});
document.getElementById("modificarh3").addEventListener("click", () => {
    if (!mostrar2) {
        document.getElementById("crud_modificar").style.display = "block";
        mostrar2 = true;
    } else {
        document.getElementById("crud_modificar").style.display = "none";
        mostrar2 = false;
    }
});
document.getElementById("buscarh3").addEventListener("click", () => {
    if (!mostrar3) {
        document.getElementById("crud_buscar").style.display = "block";
        mostrar3 = true;
    } else {
        document.getElementById("crud_buscar").style.display = "none";
        mostrar3 = false;
    }
});
/***********/
btnAgregar.addEventListener("click", () => {
    let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
    inventario.agregar(producto);
    operacion.innerHTML += "Se agregó un elemento al inventario<hr>";
    operacion.scrollTop = operacion.scrollHeight;
    
    codigo.value++;
    nombre.value = "";
    costo.value = "";
    cantidad.value = "";
});
btnAgregarPosicion.addEventListener("click", () => {
    let posicion = document.getElementById("posicion").value;
    let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
    inventario.agregarPosicion(producto, posicion);
    operacion.innerHTML += `Se agregó un elemento al inventario en la posicion ${posicion}<hr>`;
    operacion.scrollTop = operacion.scrollHeight;

    codigo.value++;
    nombre.value = "";
    costo.value = "";
    cantidad.value = "";
});
btnModificar.addEventListener("click", () => {
    let codigo = document.getElementById("codigoMod").value;
    let nombre = document.getElementById("nombreMod").value;
    let costo = document.getElementById("costoMod").value;
    let cantidad = document.getElementById("cantidadMod").value;

    inventario.modificar(codigo, nombre, cantidad, costo);
});
btnListar.addEventListener("click", () => {
    let resListar = inventario.listado();
    if (resListar != "") {
        document.getElementById('listar').innerHTML = resListar;
        operacion.innerHTML += "Se enlistaron los elementos del inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    }
});
btnListarInverso.addEventListener("click", () => {
    let resListar = inventario.listadoInverso();
    if (resListar != "") {
        document.getElementById('listar').innerHTML = resListar;
        operacion.innerHTML += "Se enlistaron los elementos del inventario en orden inverso<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    }
});
btnBuscar.addEventListener("click", () => {
    let codigo = document.getElementById("buscar1").value;
    let divRes = document.getElementById("res");
    let res = inventario.buscar(codigo);

    if (res != "") {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = res;
        operacion.innerHTML += "Se buscó un elemento en el inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    } else {
        document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Resultado de la búsqueda</h3>";
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "No se encontró el producto";
    }
});
btnEliminar.addEventListener("click", () => {
    let codigo = document.getElementById("buscar1").value;
    let res = inventario.eliminar(codigo);

    let divRes = document.getElementById("res");
    if (res != "") {
        document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Eliminado</h3>";
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = res;
        operacion.innerHTML += "Se eliminó un elemento del inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    } else {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "Ingrese un código válido";  
    }

});
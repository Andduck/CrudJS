// Eventos DOM (Document Object Model)
document
.getElementById ("formulario-producto")
.addEventlistener("submit", function (e) {
    //evaluar el comportamiento del formulario
    evento.preventDefault();//guarda y refresca la pantalla al memonto de un cambio
    //obtener los valores del formulario
    const nombre = document.getElementById ("nombre").value,
    precio = document.getElementById ("precio").value,
    año = document.getElementById("año").value;    
    //Crear un nuevo objeto "producto"
    const product = new Product (nombre, precio, año); 
    //Crear un nuevo usuario de interfaz
    const ui = new UI();
    //Input de validacion de usuario
    if (nombre==="" || precio=== "" || año=== "") {
        ui.showMessage("Porfavor ingresar datos");
    }
    //Guardar Productos
    ui.addProducto(producto);
    ui.showMessage("Precio agregado");
    ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e) =>{
    const ui= new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});
//Clase de Producto
class Producto {
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}
//Clase Usuario interfaz

class UI{
    addProducto(producto){
        const productolista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML= `<div class="targeta texto margen4">
        <div class="targeta-body">
            <strong>Producto</strong> : ${producto.nombre}-
            <strong>Precio</strong> : ${producto.precio}-
            <strong>Año</strong> : ${producto.año}-
            <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
    </div>
    `;
    productolista.appendChild(element); // appendChild = objeto hijo
}
    //resetear valores de formulario
    resetForm() {
        document.getElementById ("formulario-producto").reset ();
    }
    deleteProducto(elemento) {
        if (elemento.nombre === "eliminar"){
            element.parentElement.parentElement.remove();
            this.showMessage("El producto se a eliminado")
        }
    }

    showMessage(mensaje, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));

        //Mostrar en el DOM
        const contenido = document.querySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz usuario
        setTimeout (function () {
            document.queryselector (".alert").remove();
         }, 3000);
        }
}
```javascript
let productos = [];

function agregarProducto() {

    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;

    if (nombre == "" || cantidad == "" || precio == "") {
        alert("Tenes que completar todos los campos");
        return;
    }

    let producto = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    };

    productos.push(producto);

    mostrarProductos();

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function mostrarProductos() {

    let lista = document.getElementById("listaProductos");

    lista.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {

        lista.innerHTML += `
            <tr>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].cantidad}</td>
                <td>$${productos[i].precio}</td>
                <td>
                    <button onclick="eliminarProducto(${i})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    }
}

function eliminarProducto(posicion) {

    productos.splice(posicion, 1);

    mostrarProductos();
}
```

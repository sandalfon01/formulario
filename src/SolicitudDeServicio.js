function mostrarInfo(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cell = document.getElementById('cell').value;
    let opciones = document.getElementById('opciones');
    let opcionSeleccionada = opciones.options[opciones.selectedIndex].text;

    let datos = document.getElementById('datos');
    datos.innerHTML = "<table>" +
                        "<tr><th>Campo</th><th>Valor</th></tr>" +
                        "<tr><td>Nombre y apellido</td><td>" + name + "</td></tr>" +
                        "<tr><td>Email</td><td>" + email + "</td></tr>" +
                        "<tr><td>Celular</td><td>" + cell + "</td></tr>" +
                        "<tr><td>servicio</td><td>" + opcionSeleccionada + "</td></tr>" +
                    "</table>";

    document.getElementById('formulario').style.display = 'none';
    document.getElementById('informacion').style.display = 'block';
}
var general;
(function (general) {
    window.addEventListener('load', function () {
        crearTabla();
        traerDatosForm();
        var listaMascotas = new Array();
        // const nuevoG = new Gato('jose', 3);
        var pajaro = eTipo.Loro;
        console.log(pajaro);
    });
    function traerDatosForm() {
        var categorias = ["Clase", "Nombre", "Raza", "Tipo", "CantVidas"];
        var form = document.getElementById("form");
        categorias.map(function (elemento) {
            var label = document.createElement("label");
            label.style.display = "block";
            var datoLabel = document.createTextNode(elemento);
            label.appendChild(datoLabel);
            form.appendChild(label);
            var select = document.createElement('select');
            if (elemento == 'Clase') {
                var clases = ['-', 'Perro', 'Gato', 'Pajaro'];
                var select = createSelect(clases);
                select.setAttribute('id', 'selectFormulario');
                form.appendChild(select);
            }
            else {
                if (elemento == 'Tipo') {
                    var clases = ['-', 'Rapiña', 'Loro'];
                    var select = createSelect(clases);
                    select.setAttribute('id', 'Tipo');
                    form.appendChild(select);
                    select.disabled = true;
                }
                else {
                    var dato = document.createElement("input");
                    dato.disabled = true;
                    dato.setAttribute("id", elemento);
                    dato.setAttribute("type", "text");
                    dato.style.display = "block";
                    dato.setAttribute('position', 'fixed');
                    dato.placeholder = elemento;
                    form.appendChild(dato);
                }
            }
        });
        agregarEventoSelect();
        crearBotones(form);
        eventosBotones();
    }
    function eventosBotones() {
        var form = document.getElementById('form');
        var tabla = document.getElementById('tabla');
        var btnCancelar = document.getElementById('btnCancelar');
        var btnGuardar = document.getElementById('btnGuardar');
        btnGuardar.addEventListener("click", function () {
            var retorno = obtenerDatosForm();
            //guardarEnListaArray;
            if (retorno != null) {
                console.log(retorno);
                switch (retorno.Clase) {
                    case 'Pajaro':
                        var nuevoPajaro = new Pajaro(retorno.Nombre, 3);
                        listaMascotas.push(nuevoPajaro);
                        break;
                    case 'Perro':
                        var nuevoPerro = new Perro(retorno.Nombre, retorno.Raza);
                        listaMascotas.push(nuevoPerro);
                        break;
                    case 'Gato':
                        var nuevoGato = new Gato(retorno.Nombre, retorno.CantVidas);
                        listaMascotas.push(nuevoGato);
                        break;
                    default:
                        break;
                }
            }
        });
    }
    function crearBotones(formulario) {
        var fila = document.createElement('tr');
        var botonGuardar = document.createElement("button");
        botonGuardar.setAttribute('id', 'btnGuardar');
        botonGuardar.setAttribute("type", "button");
        botonGuardar.textContent = 'Guardar';
        fila.appendChild(botonGuardar);
        formulario.appendChild(fila);
    }
    function createSelect(clases) {
        var select = document.createElement('select');
        select.setAttribute('class', "selectTable");
        var option;
        clases.map(function (value) {
            option = document.createElement("option");
            option.setAttribute("value", value);
            var texto = document.createTextNode(value);
            option.appendChild(texto);
            select.appendChild(option);
        });
        return select;
    }
    function crearTabla() {
        var tabla = document.getElementById('tabla');
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        crearFilaFiltro();
        var encabezados = ['Mascota', 'Nombre', 'Raza', 'Cant. de vidas', 'Tipo'];
        thead.appendChild(tr);
        encabezados.map(function (value) {
            var th = document.createElement('th');
            var text = document.createTextNode(value);
            th.appendChild(text);
            tr.appendChild(th);
        });
        // animal de ejemplo
        tabla.appendChild(thead);
        // var texto = ['Pajaro', 'Piolín', '-', '-', 'Loro'];
        // agregarFilaLatabla(tabla, texto);
    }
    function agregarFilaLatabla(tabla, texto) {
        var tr = document.createElement('tr');
        texto.map(function (element) {
            var td = document.createElement('td');
            var text = document.createTextNode(element);
            td.appendChild(text);
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    }
    function crearFilaFiltro() {
        var divfilter = document.getElementById('divFilter');
        var trFilter = document.createElement('tr');
        divfilter.appendChild(trFilter);
        var dato = document.createElement("input");
        dato.setAttribute("id", 'inputFilter');
        dato.setAttribute("type", "text");
        dato.style.display = "block";
        dato.setAttribute('position', 'fixed');
        trFilter.appendChild(dato);
        var dato = document.getElementById('inputFilter');
        dato.addEventListener('keyup', function () {
            if (dato.value.length > 3) {
                //buscar en lista de array
                //traer datos
                //armar lista
            }
        });
    }
    function agregarEventoSelect() {
        var select = document.getElementById('selectFormulario');
        select.addEventListener('change', function () {
            var nombreI = document.getElementById('Nombre');
            var razaI = document.getElementById('Raza');
            var tipoI = document.getElementById('Tipo');
            var cantVidasI = document.getElementById('CantVidas');
            console.log(select.value);
            razaI.disabled = true;
            tipoI.disabled = true;
            cantVidasI.disabled = true;
            nombreI.disabled = true;
            switch (select.value) {
                case 'Pajaro':
                    nombreI.disabled = false;
                    tipoI.disabled = false;
                    break;
                case 'Gato':
                    nombreI.disabled = false;
                    cantVidasI.disabled = false;
                    break;
                case 'Perro':
                    nombreI.disabled = false;
                    razaI.disabled = false;
                    break;
                default:
                    break;
            }
        });
    }
    function obtenerDatosForm() {
        var select = document.getElementById('selectFormulario');
        var nombreI = document.getElementById('Nombre');
        var razaI = document.getElementById('Raza');
        var tipoI = document.getElementById('Tipo');
        var cantVidasI = document.getElementById('CantVidas');
        var retono = validarCampos(select.value, nombreI.value, razaI.value, cantVidasI.value, tipoI.value);
        var retornoJson = null;
        if (retono) {
            retornoJson = {
                "Clase": select.value,
                "Nombre": nombreI.value,
                "Raza": razaI.value,
                "Tipo": tipoI.value,
                'CantVidas': cantVidasI.value
            };
        }
        return retornoJson;
    }
    function validarCampos(mascota, nombre, raza, cantidadVidas, tipo) {
        var retorno = true;
        if (nombre.length > 0 && nombre.toString() && mascota != "-") {
            alert('Uno de los datos ingresados es incorrecto');
            alert('vacio');
            retorno = false;
        }
        if (raza.length > 0 && raza.toString() && mascota == 'Perro') {
            alert('Uno de los datos ingresados es incorrecto');
            alert('Perro');
            retorno = false;
        }
        if (cantidadVidas < 1 || cantidadVidas > 9 && mascota == 'Gato') {
            alert('Uno de los datos ingresados es incorrecto');
            retorno = false;
            alert('Gato');
        }
        if (tipo == "-" && mascota == 'Pajaro') {
            alert('Uno de los datos ingresados es incorrecto');
            retorno = false;
            alert('Pajaro');
        }
        return retorno;
    }
})(general || (general = {}));

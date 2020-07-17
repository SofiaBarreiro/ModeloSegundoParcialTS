var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var general;
(function (general) {
    var Mascota = /** @class */ (function () {
        function Mascota(nombreA) {
            this.nombre = nombreA;
        }
        Mascota.prototype.getNombre = function () {
            return this.nombre;
        };
        Mascota.prototype.setNombre = function (nombreA) {
            this.nombre = nombreA;
        };
        return Mascota;
    }());
    general.Mascota = Mascota;
    var Gato = /** @class */ (function (_super) {
        __extends(Gato, _super);
        function Gato(nombre, cantVidas) {
            var _this = _super.call(this, nombre) || this;
            _this.nombre = nombre;
            _this.cantVidas = cantVidas;
            _this.cantVidas = cantVidas;
            return _this;
        }
        Gato.prototype.getVidasGato = function () {
            return this.cantVidas;
        };
        Gato.prototype.setVidasGato = function (cantVidas) {
            this.cantVidas = cantVidas;
        };
        return Gato;
    }(Mascota));
    general.Gato = Gato;
    var Pajaro = /** @class */ (function (_super) {
        __extends(Pajaro, _super);
        function Pajaro(nombreA, tipo) {
            var _this = _super.call(this, nombreA) || this;
            _this.nombreA = nombreA;
            _this.tipo = tipo;
            _this.tipo = tipo;
            return _this;
        }
        Pajaro.prototype.getTipo = function () {
            return this.tipo;
        };
        Pajaro.prototype.setTipo = function (tipo) {
            this.tipo = tipo;
        };
        return Pajaro;
    }(Mascota));
    general.Pajaro = Pajaro;
    var eTipo;
    (function (eTipo) {
        eTipo[eTipo["Rapi\u00F1a"] = 0] = "Rapi\u00F1a";
        eTipo[eTipo["Loro"] = 1] = "Loro";
    })(eTipo = general.eTipo || (general.eTipo = {}));
    var Perro = /** @class */ (function (_super) {
        __extends(Perro, _super);
        function Perro(nombre, raza) {
            var _this = _super.call(this, nombre) || this;
            _this.nombre = nombre;
            _this.raza = raza;
            _this.raza = raza;
            return _this;
        }
        Perro.prototype.getRaza = function () {
            return this.raza;
        };
        Perro.prototype.setRaza = function (raza) {
            this.raza = raza;
        };
        return Perro;
    }(Mascota));
    general.Perro = Perro;
    window.addEventListener('load', function () {
        crearTabla();
        traerDatosForm();
        // const nuevoG = new Gato('jose', 3);
        // var pajaro = eTipo.Loro;
        // console.log(pajaro);
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
        var listaMascotas = new Array();
        btnGuardar.addEventListener("click", function () {
            var retorno = obtenerDatosForm();
            //guardarEnListaArray;
            if (retorno != null) {
                console.log(retorno);
                switch (retorno.Clase) {
                    case 'Pajaro':
                        // const nuevoPajaro: Pajaro = new Pajaro(retorno.Nombre, 3);
                        // listaMascotas.push(nuevoPajaro);
                        break;
                    case 'Perro':
                        var nuevoPerro = new Perro(retorno.Nombre, retorno.Raza);
                        listaMascotas.push(nuevoPerro);
                        console.log(listaMascotas);
                        break;
                    case 'Gato':
                        var nuevoGato = new Gato(retorno.Nombre, retorno.CantVidas);
                        listaMascotas.push(nuevoGato);
                        console.log(listaMascotas);
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
        tr.setAttribute('id', 'thead');
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
        var filas = document.createElement('div');
        filas.setAttribute('id', 'filas');
        tabla.appendChild(filas);
        // var texto = ['Pajaro', 'Piolín', '-', '-', 'Loro'];
        // agregarFilaLatabla(tabla, texto);
    }
    function agregarFilaLatabla(fila, texto) {
        var tr = document.createElement('tr');
        texto.map(function (element) {
            var td = document.createElement('td');
            var text = document.createTextNode(element);
            td.appendChild(text);
            tr.appendChild(td);
        });
        fila.appendChild(tr);
    }
    function quitarFilaDeLatabla(filas) {
        while (filas.firstChild) {
            filas.firstChild.remove();
        }
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
            var encontro = false;
            var texto = null;
            if (dato.value.length > 3) {
                console.log(dato.value);
                //buscar en lista de array
                var listaMascotas = new Array();
                var nuevoPerro = new Perro('fifi', 'caniche');
                var nuevoPerro2 = new Perro('nana', 'caniche');
                var nuevoPerro3 = new Perro('pepe', 'caniche');
                var nuevoGato = new Gato('gato', 3);
                var nuevoPajaro = new Pajaro('pajaro', eTipo.Loro);
                listaMascotas.push(nuevoPerro);
                listaMascotas.push(nuevoPerro2);
                listaMascotas.push(nuevoPerro3);
                listaMascotas.push(nuevoGato);
                listaMascotas.push(nuevoPajaro);
                var fila = document.getElementById('filas');
                for (var i = 0; i < listaMascotas.length; i++) {
                    if (listaMascotas[i].getNombre() == dato.value) {
                        encontro = true;
                        texto = [typeof (listaMascotas[i]), listaMascotas[i].getNombre()];
                        var tipoMascota = listaMascotas[i].constructor.name;
                        switch (tipoMascota) {
                            case 'Perro':
                                texto = [tipoMascota, listaMascotas[i].getNombre(), listaMascotas[i].getRaza(), "-", "-"];
                                break;
                            case 'Pajaro':
                                if ((listaMascotas[i].getTipo().toString() == 1)) {
                                    texto = [tipoMascota, listaMascotas[i].getNombre(), "-", "-", "Loro"];
                                }
                                else {
                                    texto = [tipoMascota, listaMascotas[i].getNombre(), "-", "-", "Rapiña"];
                                }
                                break;
                            case 'Gato':
                                texto = [tipoMascota, listaMascotas[i].getNombre(), "-", listaMascotas[i].getVidasGato().toString(), "-"];
                                break;
                        }
                    }
                }
                //armar lista
            }
            if (texto != null) {
                agregarFilaLatabla(fila, texto);
            }
            else {
                quitarFilaDeLatabla(fila);
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
        var retorno = false;
        retorno = validarCampos(select.value, nombreI.value, razaI.value, cantVidasI.value, tipoI.value);
        var retornoJson = null;
        if (retorno == true) {
            retornoJson = {
                "Clase": select.value,
                "Nombre": nombreI.value,
                "Raza": razaI.value,
                "Tipo": tipoI.value,
                'CantVidas': cantVidasI.value
            };
        }
        select.value = "-";
        nombreI.value = "";
        razaI.value = "";
        tipoI.value = "-";
        cantVidasI.value = "";
        return retornoJson;
    }
    function validarCampos(mascota, nombre, raza, cantidadVidas, tipo) {
        var retorno = true;
        console.log(nombre.length);
        if (mascota == "-" || nombre.length == 0) {
            retorno = false;
        }
        if (raza.length == 0 && mascota == 'Perro') {
            alert('Uno de los datos ingresados es incorrecto');
            // alert('Perro');
            console.log(mascota);
            retorno = false;
        }
        if (cantidadVidas < 1 || cantidadVidas > 9 && mascota == 'Gato') {
            alert('Uno de los datos ingresados es incorrecto');
            retorno = false;
        }
        if (tipo == "-" && mascota == 'Pajaro') {
            alert('Uno de los datos ingresados es incorrecto');
            retorno = false;
            alert('Pajaro');
        }
        return retorno;
    }
})(general || (general = {}));

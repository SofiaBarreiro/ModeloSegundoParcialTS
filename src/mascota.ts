namespace general {

    export class Mascota {

        private nombre: string;


        public constructor(nombreA: string) {

            this.nombre = nombreA;

        }

        public getNombre(): string {

            return this.nombre;

        }

        public setNombre(nombreA: string): void {

            this.nombre = nombreA

        }


    }

    export class Gato extends Mascota {


        private cantVidas: number;

        constructor(private nombre: string, private cantVidas: number) {
            super(nombre);

            this.cantVidas = cantVidas;


        }

        public getVidasGato(): number {

            return this.cantVidas;

        }

        public setVidasGato(cantVidas): void {

            this.cantVidas = cantVidas;

        }

    }
    export class Pajaro extends Mascota {


        private tipo: eTipo;

        constructor(private nombreA: string, private tipo: eTipo) {
            super(nombreA);

            this.tipo = tipo;

        }


        public getTipo(): eTipo {

            return this.tipo;

        }

        public setTipo(tipo): void {

            this.tipo = tipo;

        }



    }
    export enum eTipo {

        Rapiña,
        Loro


    }

    export class Perro extends Mascota {


        public raza: string;

        constructor(private nombre: string, public raza: string) {
            super(nombre);

            this.raza = raza;

        }

        public getRaza(): string {

            return this.raza;

        }

        public setRaza(raza): void {

            this.raza = raza;

        }


    }



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

        categorias.map((elemento) => {

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



            } else {


                if (elemento == 'Tipo') {

                    var clases = ['-', 'Rapiña', 'Loro'];
                    var select = createSelect(clases);
                    select.setAttribute('id', 'Tipo');

                    form.appendChild(select);

                    select.disabled = true;
                } else {
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


        var form = <HTMLInputElement>document.getElementById('form');
        var tabla = <HTMLInputElement>document.getElementById('tabla');
        var btnCancelar = <HTMLInputElement>document.getElementById('btnCancelar');
        var btnGuardar = <HTMLInputElement>document.getElementById('btnGuardar');


        var listaMascotas: Array<Mascota> = new Array<Mascota>();


        btnGuardar.addEventListener("click", () => {

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
                        const nuevoPerro: Perro = new Perro(retorno.Nombre, retorno.Raza);
                        listaMascotas.push(nuevoPerro);

                        console.log(listaMascotas);

                        break;
                    case 'Gato':
                        const nuevoGato: Gato = new Gato(retorno.Nombre, retorno.CantVidas);
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

        clases.map((value) => {

            option = document.createElement("option");
            option.setAttribute("value", value);

            var texto = document.createTextNode(value);
            option.appendChild(texto);
            select.appendChild(option);

        });

        return select;
    }




    function crearTabla() {

        let tabla = document.getElementById('tabla');

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        tr.setAttribute('id', 'thead');

        crearFilaFiltro();

        var encabezados = ['Mascota', 'Nombre', 'Raza', 'Cant. de vidas', 'Tipo'];
        thead.appendChild(tr);

        encabezados.map((value) => {

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

        texto.map(element => {

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


        var dato = <HTMLInputElement>document.getElementById('inputFilter');

        dato.addEventListener('keyup', function () {
            var encontro = false;
            var texto = null;

            if (dato.value.length > 3) {
                console.log(dato.value);
                //buscar en lista de array
                var listaMascotas: Array<Mascota> = new Array<Mascota>();

                const nuevoPerro: Perro = new Perro('fifi', 'caniche');
                const nuevoPerro2: Perro = new Perro('nana', 'caniche');
                const nuevoPerro3: Perro = new Perro('pepe', 'caniche');
                const nuevoGato: Gato = new Gato('gato', 3);
                const nuevoPajaro: Pajaro = new Pajaro('pajaro', eTipo.Loro);


                listaMascotas.push(nuevoPerro);
                listaMascotas.push(nuevoPerro2);
                listaMascotas.push(nuevoPerro3);
                listaMascotas.push(nuevoGato);
                listaMascotas.push(nuevoPajaro);

                var fila = <HTMLInputElement>document.getElementById('filas');




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
                                if ((listaMascotas[i].getTipo().toString() == 1){
                                    texto = [tipoMascota, listaMascotas[i].getNombre(), "-", "-", "Loro"];

                                } else {
                                    texto = [tipoMascota, listaMascotas[i].getNombre(), "-", "-", "Rapiña"];

                                }
                                break;
                            case 'Gato':
                                texto = [tipoMascota, listaMascotas[i].getNombre(), "-", listaMascotas[i].getVidasGato().toString(), "-"];

                                break

                        }


                    }
                }



                //armar lista
            }
            if (texto != null) {
                agregarFilaLatabla(fila, texto);

            } else {

                quitarFilaDeLatabla(fila);

            }


        });

    }

    function agregarEventoSelect() {


        var select = <HTMLInputElement>document.getElementById('selectFormulario');



        select.addEventListener('change', function () {

            var nombreI = <HTMLInputElement>document.getElementById('Nombre');
            var razaI = <HTMLInputElement>document.getElementById('Raza');
            var tipoI = <HTMLInputElement>document.getElementById('Tipo');
            var cantVidasI = <HTMLInputElement>document.getElementById('CantVidas');


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


        var select = <HTMLInputElement>document.getElementById('selectFormulario');
        var nombreI = <HTMLInputElement>document.getElementById('Nombre');
        var razaI = <HTMLInputElement>document.getElementById('Raza');
        var tipoI = <HTMLInputElement>document.getElementById('Tipo');
        var cantVidasI = <HTMLInputElement>document.getElementById('CantVidas');
        var retorno = false;
        retorno = validarCampos(select.value, nombreI.value, razaI.value, cantVidasI.value, tipoI.value);
        var retornoJson = null;
        if (retorno == true) {

            retornoJson = {
                "Clase": select.value,
                "Nombre": nombreI.value,
                "Raza": razaI.value,
                "Tipo": tipoI.value,
                'CantVidas': cantVidasI.value,
            }


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


}
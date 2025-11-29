(function () {

    var obtenerSucesos = function () {
        // Obtener la fecha actual (mes y día)
        const fecha = new Date();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0-11
        const dia = String(fecha.getDate()).padStart(2, '0');

        //var asideBar = document.getElementById("asideBar");
        var bloqueSucesos = document.getElementById("bloqueSucesos");
        while (bloqueSucesos.firstChild) {
            bloqueSucesos.removeChild(bloqueSucesos.firstChild);
        }
        //bloqueSucesos.innerHTML = "";

        var loadBar = document.getElementById("contenedorCarga");
        loadBar.style.display = 'block';

        var btnRecarga = document.getElementById("btnRecarga");
        btnRecarga.style.display = 'none';

        // Construir la URL de la API
        const url = `https://api.wikimedia.org/feed/v1/wikipedia/es/onthisday/all/${mes}/${dia}`;

        // Consumir la API con fetch
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al consultar la API: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setTimeout(() => {

                    let htmlPaises = '';
                    var contador = 0;
                    var i = 0;
                    data.events.forEach(evento => {
                        const contenedorSuceso = document.createElement('div');
                        const tituloYear = document.createElement('p');
                        const explicacionSuceso = document.createElement('p');
                        const divisorSuceso = document.createElement('p');

                        contenedorSuceso.classList.add('contenedorSuceso');
                        tituloYear.classList.add('tituloYearSuceso');
                        explicacionSuceso.classList.add('explicacionSuceso');
                        divisorSuceso.classList.add('divisorSuceso');

                        const random = getRandom(i);
                        i++;

                        // if(contador < 3 && random === true){ 
                        if (contador < 3 && random == 1) {
                            contador++;

                            let texto = evento.text;
                            let textoAcortado = texto;

                            tituloYear.textContent = "Año: " + evento.year;
                            //explicacionSuceso.textContent = textoAcortado
                            contenedorSuceso.appendChild(tituloYear);


                            if (texto.length > 175) {
                                textoAcortado = texto.substr(0, 175);
                                textoAcortado = textoAcortado.trim().concat('...');

                                explicacionSuceso.textContent = textoAcortado;

                            } else {
                                explicacionSuceso.textContent = texto;
                            }

                            const enlace = document.createElement('a');
                            enlace.setAttribute('target', '_blank');

                            var urlWiki = "";
                            try {
                                urlWiki = evento.pages[0].content_urls.desktop.page;
                            } catch (error) {
                                console.error("Error identificado al obtener url de Wikipedia: " + error.message);
                            }
                            if (urlWiki != "") {
                                enlace.textContent = "[Wikipedia]";
                                enlace.setAttribute('href', urlWiki);
                                enlace.classList.add('linkArticulo');
                                explicacionSuceso.appendChild(enlace);
                            }

                            //enlace.setAttribute('href',`${evento.pages[0].content_urls.desktop.page}`);
                            //enlace.textContent = "[Wikipedia]";
                            //enlace.classList.add('linkArticulo');
                            //explicacionSuceso.appendChild(enlace);

                            contenedorSuceso.appendChild(explicacionSuceso);
                            contenedorSuceso.appendChild(divisorSuceso);
                            bloqueSucesos.appendChild(contenedorSuceso); //Agregar el contenedor al bloque

                            /*htmlPaises += `
                                <div class="contenedorSuceso">
                                <p class="tituloYearSuceso">Año: ${evento.year}</p>
                                <p class="explicacionSuceso">${textoAcortado}</p>
                                <p class="divisorSuceso"></p>
                                </div>
                            `;*/

                        } else {
                            return;
                        }

                    });

                    loadBar.style.display = 'none';
                    btnRecarga.style.display = 'flex';
                    //bloqueSucesos.innerHTML = htmlPaises;


                }, 1500); // 1.5 segundos de espera para simular carga

            })
            .catch(error => {
                console.error("❌ Error:", error);
                loadBar.style.display = 'none';
                btnRecarga.style.display = 'flex';

                const errorMsg = document.createElement('p');
                errorMsg.textContent = "Error al intentar obtener la información, intente más tarde.";
                bloqueSucesos.appendChild(errorMsg);
                //bloqueSucesos.innerHTML += "<div><p>Error al intentar obtener la información, pruebe más tarde.</p></div>";
            });


    };

    obtenerSucesos();

    /******************** */
    //Función para números aleatorios.
    const getRandom = (i) => {
        //min = Math.ceil(min)
        //max = Math.floor(max)
        console.log("i: " + i);
        const fecha = new Date()
        a = fecha.getTime() + i;
        b = fecha.getMilliseconds();

        numero = a % b;

        if (Math.round(Math.random()) == 1) {
            numero = numero * 11;
        } else {
            numero = numero * 10;
        }

        repeticion = 0;
        while (repeticion == 0) {
            numero = numero % 2;
            repeticion = Math.round(Math.random());
        }

        console.log(numero);
        return numero;
        //return Math.round(Math.random())
    }

    /******************** */
    document.getElementById("btnRecarga").addEventListener('click', () => {
        obtenerSucesos();
    });

}());

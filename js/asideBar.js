(function(){


     var obtenerSucesos = function(){
            // Obtener la fecha actual (mes y día)
        const fecha = new Date();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0-11
        const dia = String(fecha.getDate()).padStart(2, '0');

        var asideBar = document.getElementById("asideBar");

         var loadBar = document.getElementById("contenedorCarga");
            loadBar.style.display = 'block';
         

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
            //console.log("🎉 Eventos históricos del día:");
            
            var contador = 0;
            data.events.forEach(evento => {
            //console.log(`📅 Año: ${evento.year}`);
            //console.log(`📖 Evento: ${evento.text}`);
            //console.log('--------------------');
            
            if(contador<3){
                contador ++;

            htmlPaises += `
            <div class="contenedorSuceso">
            <p class="tituloYearSuceso">Año: ${evento.year}</p>
            <p>${evento.text}</p>
            <p></p>
            </div>

            `;
            }else{
                return;
            }
            
            });

            
           loadBar.style.display = 'none';
           asideBar.innerHTML += htmlPaises;


        }, 1500); // 2 segundos de espera para simular carga
        

            
           
            
        })
        .catch(error => {
            console.error("❌ Error:", error);
        });

       
     };


    obtenerSucesos();
   
 
     

}())
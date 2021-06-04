/* 
JavaScript / XML
web o pagina: JavaScript
autor: Alum. Raquel Castellano Hernández
fecha: 03 Junio2021
resumen: lectura y carga en array bidimensional de un XML
*/
// variable global de la pagina
let registrados = [];
function ascNombre() {
  //Ordeno primero la mariz
  registrados.sort(
  (usuario1,usuario2) =>
     usuario1[0].localeCompare(usuario2[0]),
);

  // muestro en consola el array de usuarios registrados
  //Y aquí tambien deberia mostrar
  // muestro en consola el array de usuarios registrados
  let tabla="";
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      tabla = "<table><tr><th>Empleado</th><th>Foto</th></tr>";
      for (i = 0; i <registrados.length; i++) { 
        // leo las etiquetas que me interesan del objeto
        usrNom = registrados[i][0];
        usrPsw = registrados[i][1];
          // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>"
    });
  });
  document.getElementById("solicitado").innerHTML = tabla;
}

function ascClave() {
  //Ordeno primero la mariz
  registrados.sort(
  (usuario1,usuario2) =>
     usuario1[1].localeCompare(usuario2[1]),
);

  // muestro en consola el array de usuarios registrados
  //Y aquí tambien deberia mostrar
  // muestro en consola el array de usuarios registrados
  let tabla="";
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
      for (i = 0; i <registrados.length; i++) { 
        // leo las etiquetas que me interesan del objeto
        usrNom = registrados[i][0];
        usrPsw = registrados[i][1];
          // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>"
    });
  });
  document.getElementById("solicitado").innerHTML = tabla;
}
function mostrar() {
  // muestro en consola el array de usuarios registrados
  var usr=$("#nom").val();
  var long=registrados.length;
  var i=0;
  var sol=null;
  //solucion
  while(i<long){
    if(usr==registrados[i][0]){
      sol=("Tu usurio buscado es "+usr+" y su clave es "+registrados[i][1]);
    }
    i++;
  }if(sol==null){
    sol="No se ha encontrado tu búsqueda";
  }
  document.getElementById("solicitado").innerHTML = sol;
}


function leerXML0() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://raquelcasher.github.io/CMV-publico/03-05/03Junio.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  let fotoNombre;
  let fotoUrl;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  
  var x = xmlDoc.getElementsByTagName("foto");
  
 var carousel=`
      <div id="carouselExampleIndica" class="tam carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndica" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndica" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndica" data-slide-to="2"></li>
        </ol>
      <div class="carousel-inner ">`;
 
 //"<div id='carouselExampleIndicators'  data-ride='carousel'> <ol class='carousel-indicators'> <li data-target='#carouselExampleIndicators'data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators' data-slide-to='1'></li> <li data-target='#carouselExampleIndicators' data-slide-to='2'></li> </ol> <div class='carousel-inner'>;
  for (i = 0; i <x.length; i++) { 
    // leo las etiquetas que me interesan del objeto
    fotoNombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    fotoUrl = x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
   //carousel += <div class='carousel-item active'><img class='d-block w-100' src='"+fotoUrl+"' alt='First slide'><div class='carousel-caption'><h5>"+ fotoNombre +"/h5><p>"+fotoNombre+"</p></div></div>";
    if (i==0){
      carousel += ` <div class="carousel-item active contenedor">
                    <img class="d-block w-100" src="${fotoUrl}" alt="First slide">
                    <div class="carousel-caption">
                      <h5>${fotoNombre}</h5>
                      <p>${fotoNombre}</p>
                    </div>
                  </div>`;

    }else{
    carousel += ` <div class="carousel-item">
                    <img class="d-block w-100" src="${fotoUrl}" alt="First slide">
                    <div class="carousel-caption">
                      <h5>${fotoNombre}</h5>
                      <p>${fotoNombre}</p>
                    </div>
                  </div>`;
    }
    // actualizo el array bidimensional con los usuarios registrados
    usuario = [fotoNombre,fotoUrl];
    registrados.push(usuario);
  }

  carousel += `</div>
              <a class="carousel-control-prev" href="#carouselExampleIndica" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndica" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
            </div>`;
  document.getElementById("contenidoXML").innerHTML = carousel;
  
  // muestro en consola el array de usuarios registrados
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      console.log(datos);
    });
  });
}
/* 
JavaScript / XML
web o pagina: ejercicios de XML y JavaScript
autor: Prof. Carlos Boni
fecha: 27 abril 2021
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
      miFuncion(this,"Desde GitHub con atributos");
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
  xhr.send();
}

function miFuncion(xml,fuente) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var tabla=fuente + "<br/>";
  var x = xmlDoc.getElementsByTagName("usuario");
  
  tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i <x.length; i++) { 
  // leo las etiquetas que me interesan del objeto
  usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
  usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
  tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
  // actualizo el array bidimensional con los usuarios registrados
  usuario = [usrNom,usrPsw];
  registrados.push(usuario);
  }
  tabla += "</table>"
  document.getElementById("contenidoXML").innerHTML = tabla;
  
  // muestro en consola el array de usuarios registrados
  registrados.forEach((usuario) => {
    usuario.forEach((datos) => {
      console.log(datos);
    });
  });
}
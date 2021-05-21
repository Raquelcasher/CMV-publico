function vermas(id){
	if(id=="mas"){
	document.getElementById("desplegar").style.display="block";   
	document.getElementById("mas").style.display="none"; 
	}
	else{
	document.getElementById("desplegar").style.display="none";
	document.getElementById("mas").style.display="inline";
	}
}
function elige() {
    var lista = document.getElementById("hijos")
	if (lista.selectedIndex == null || lista.selectedIndex == 0) { 
        alert("El formulario no ha sido enviado; \n Debes elegir un color de la lista.")
        return false
    }
    else { 
        alert("El formulario ha sido enviado")
    }		
}
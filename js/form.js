function completo(){
    var valor1 =document.getElementById("elemento1").value;

    var lista = document.getElementById("opciones");
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var textoSeleccionado = opcionSeleccionada.text;

    var sexo=document.getElementsByName("Sexo");
    for(i=0; i<sexo.length; i++){
        if(sexo[i].checked){
        var genero=sexo[i].value;
        //alert("Sexo: "+genero);
        }
    }

    var valor2=document.getElementById("elemento3").value;
    
    var valor4=document.getElementById("elemento6").value;

    var valor5=document.getElementById("elemento7").value;

    alert("Nombre: " + valor1 +
    "\nEdad : " + valor2 +
    "\nSexo : " + genero +
    "\n Opcion seleccionada del modelo: " + textoSeleccionado + 
    "\n Email : " + valor4 +
    "\n Numero : " + valor5 );
}

function radio() {
    var sexo=document.getElementsByName('Sexo');
    for(i=0; i<sexo.length; i++){
        if(sexo[i].checked){
        var genero=sexo[i].value;
        alert("Sexo: "+genero);
        }
    }
}


/*function nom() {
    var valor=document.getElementById("elemento1").value;
    alert("Nombre: " + valor);
}*/

/*function edad() {
    var valor=document.getElementById("elemento3").value;
    alert("Edad: " + valor);
}*/

/*function completa(){
    nom();
    edad();
    //radio();
    menu();
}*/
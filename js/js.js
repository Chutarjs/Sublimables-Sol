//envia la opinion por ws
function opinion(){
    var texto = document.getElementById("txtExperiencia").value;
    var comando = "https://api.whatsapp.com/send?phone=+50683372653&text=";
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == " "){
            comando += "%20";
        }
        else
        {
            comando += texto[i];
        }
    }
    window.location.href = comando;
}

function numInteres(){
    document.getElementById("numInteres").innerHTML = document.getElementById("interes").value;
}

function calcularEdad() {
    var fecha = document.getElementById("nacimiento").value;
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    document.getElementById("edad").innerHTML = edad;
}

function enviarCorreo(){
    var nombre = $('#name').val(); 
    if(nombre == ""){
        alert("Debes introducir tu nombre");
        return;
    }
    var asunto = $('#asunto').val(); 
    if(asunto == ""){
        alert("Debes introducir un asunto");
        return;
    }
    var edad = $('#edad').text();
    if(edad == "Por favor selecciona una fecha de nacimiento"){
        alert("Debes introducir tu edad");
        return;
    }
    var interes = $('#numInteres').text();
    var genero = $('#masculino').prop('checked') ? "Masculino": $('#femenino').prop('checked') ? "Femenino": "Otro" ;
    var conociste = "";
    if($('#conocidos').is(':checked')){
        conociste += "\nConocidos"
    }
    if($('#redes').is(':checked')){
        conociste += "\nRedes"
    }
    if($('#otro').is(':checked')){
        conociste += "\nOtros"
    }
    if(conociste == ""){
        alert("Debes marcar el como nos conociste");
        return;
    }
    var msg = $('#msg').val();
    if(msg == ""){
        alert("Debes introducir tu mensaje");
        return;
    }
    asunto = asunto.split(/\s/).join("%20");
    var mensaje = "Mi nombre es: " + nombre + ",\n mi edad es de: " + edad + ",\n soy: " + genero + ",\n tengo un rango de interes del: " + interes*10 + "%,\n y los conoci por: " + conociste + ",\n y mi mensaje es: "+ msg;
    mensaje = mensaje.split(/\s/).join("%20");
    
    window.location.assign("mailto:jerojasal@est.utn.ac.cr?subject="+asunto+"&body="+mensaje);
}

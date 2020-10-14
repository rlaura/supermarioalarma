
function reloj() {
  let hoy = new Date();
  let hora = hoy.getHours();
  let minuto = hoy.getMinutes();
  let segundo = hoy.getSeconds();
  
  if (minuto < 10) {
    minuto = "0" + minuto
  };
  if (segundo < 10) {
    segundo = "0" + segundo
  };

  let reloj = document.getElementById("reloj");
  reloj.textContent = (hora + ":" + minuto + ":" + segundo);

 let horaX = document.getElementById("hora").value;
 let minutoX = document.getElementById("minuto").value;	
 
if (hora == horaX && minuto == minutoX && segundo == "00") {
    document.getElementById('alert').style.visibility = "visible";
    document.getElementById('texto-alert').innerHTML = '¡HORA DE LEVANTARSE!'
    document.getElementById("alarma-mp3").play();
  };
};

setInterval(reloj, 1000);

function cerrar() {
	document.getElementById('alert').style.visibility = "hidden";
	document.getElementById("alarma-mp3").pause(); 	
  document.getElementById("hora").value = '';
  document.getElementById("minuto").value = ''; 
  document.getElementById("saludo").value = ''; 
}

window.onkeyup = capturaESC;
function capturaESC(){
    let e = window.event;
    let tecla = (document.all) ? e.keyCode : e.which;
    if(tecla === 27){
        cerrar()

    }
}

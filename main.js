/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {

  if (registrada.value === "si") {
    if (parseInt(distancia.value) <=3){
tarifa.innerText= "$715.24"
    }
    else if (parseInt(distancia.value)<=6){
    tarifa.innerText= "$794.74"
    }
    else if (parseInt(distancia.value)<=12){
      tarifa.innerText= "$855.97"
    }
    else if (parseInt(distancia.value)<=27){
      tarifa.innerText= "$917.24"
    }
  }
else if (registrada.value === "no") {
  if (parseInt(distancia.value) <=3) {
    tarifa.innerText= "$1137.23"
  }
  else if (parseInt(distancia.value) <=6) {
    tarifa.innerText= "$1263.64"
  }
  else if (parseInt(distancia.value) <=12) {
    tarifa.innerText= "$1360.99"
  }
  else if (parseInt(distancia.value) <=27) {
    tarifa.innerText= "1458.41"
  }
  }

}
);

  
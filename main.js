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
       if (colectivos.value === "CABA") {
      tarifa.innerText= "$753.74"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$968.57"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$714.00"
    }
    }
    else if (parseInt(distancia.value)<=6){
       if (colectivos.value === "CABA") {
      tarifa.innerText= "$837.52"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$1089.64"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$807.07"
    }
    }
    else if (parseInt(distancia.value)<=12){
        if (colectivos.value === "CABA") {
      tarifa.innerText= "$902.04"
      }
      else if (colectivos.value === "interior") {
      tarifa.innerText= "$1210.71"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$894.17"
    }
    }
    else if (parseInt(distancia.value)<=27){
        if (colectivos.value === "CABA") {
      tarifa.innerText= "$966.61"
      }
      else if (colectivos.value === "interior") {
      tarifa.innerText= "$1452.85"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$983.78"
    }
    }
  }


else if (registrada.value === "no") {
 if (parseInt(distancia.value) <=3) {
    if (colectivos.value === "CABA") {
      tarifa.innerText= "$1198.45"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$1937.14"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$1428.00"
    }
  }
  else if (parseInt(distancia.value) <=6) {
    if (colectivos.value === "CABA") {
      tarifa.innerText= "$1331.66"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$2179.28"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$1614.14"
    }
  }
  else if (parseInt(distancia.value) <=12) {
    if (colectivos.value === "CABA") {
      tarifa.innerText= "$1434.24"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$2421.42"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$1788.34"
    }
  }
  else if (parseInt(distancia.value) <=27) {
    if (colectivos.value === "CABA") {
      tarifa.innerText= "$1536.91"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$2905.70"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$1967.56"
    }
  }
  }



  if (registrada.value === "tarifasocial") {
    if (parseInt(distancia.value) <=3){
      if (colectivos.value === "CABA") {
      tarifa.innerText= "$339.18"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$435,85"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$321.30"
    }
    }
    else if (parseInt(distancia.value)<=6){
    if (colectivos.value === "CABA") {
      tarifa.innerText= "$376.88"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$490.33"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$363.18"
    }
    }
    else if (parseInt(distancia.value)<=12){
      if (colectivos.value === "CABA") {
      tarifa.innerText= "$405.91"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$544,81"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$402.37"
    }
    }
    else if (parseInt(distancia.value)<=27){
       if (colectivos.value === "CABA") {
      tarifa.innerText= "$434.97"
    }
    else if (colectivos.value === "interior") {
      tarifa.innerText= "$653.78"
    }
    else if (colectivos.value === "nacionales") {
      tarifa.innerText= "$442.70"
    }
    }
  }
});




  
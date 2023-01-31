let miner = prompt(`Ingrese el numero de minero con el cual va trabajar: \n 
Minero#1: Antminer S9 \n 
Minero#2: Antminer S11 \n 
Minero#3: Antminer S14` );

let costoEnergetico;
let diasDeMinado;

if ( miner == 1  || miner == 2  || miner == 3 ){
    costoEnergetico = prompt(`Ingrese el costo de la energia en su hogar en USD/kWH:`);
    diasDeMinado = prompt(`Ingrese la cantidad de dias en la que quiere saber sus ingresos:`);
} else {
    alert ("Debe ingresar un numero de minero correcto")
    breack;
}


const btcPrice = 23000;
const profitPerHashperDay = 0.00000338890625

let profitPerDay;

switch(miner) {
    case '1':  profitPerDay = btcPrice * profitPerHashperDay * 9;
    break;
    case '2':  profitPerDay = btcPrice * profitPerHashperDay * 11;
    break;
    case '3':  profitPerDay = btcPrice * profitPerHashperDay * 14;
    break;
    default:
    alert( "Ingrese una de las 3 opciones de mineros" );
  }

  let d = 0;
  let profit = 0;
  while (d < diasDeMinado)  {
    profit += profitPerDay ;
    d++
  }

alert(`Su rendimiento en  ${diasDeMinado} sera ${profit}!`)
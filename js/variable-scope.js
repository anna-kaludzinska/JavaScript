"use strict";

var zmiennaGlobalna = 3;

function dodaj() {
	var zmiennaLokalna = 7;
	var suma;
	suma = zmiennaLokalna + zmiennaGlobalna;
	console.log(suma);
}

dodaj();
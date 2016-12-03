"use strict";

var liczba1 = 50;
var kolory = ["żółty", "pomarańczowy", "łososiowy"];

kolory[3] = "czarny";

kolory.push("czerwony");

kolory.pop();

kolory.unshift("zielony");

var dlugoscTablicy;
var uniwersalnaZmienna;

dlugoscTablicy = kolory.unshift("zielony");

console.log(dlugoscTablicy);

kolory.shift();

console.log(kolory.length);

console.log(kolory);

var kolory2 = ["niebieski", "różowy", "lazurowy", "biały"];
var koloryPolaczone = kolory.concat(kolory2);
console.log(koloryPolaczone);

console.log(kolory2.toString());

/*
uniwersalnaZmienna = kolory2.indexOf("niebieski");
console.log(uniwersalnaZmienna);

kolory2.splice(1,0,"brązowy", "złoty");
console.log(kolory2);
*/



/*
if (Array.isArray(liczba1)) {
	console.log("tak");
} else {
	console.log("nie");
}

Array.isArray(liczba1) ? console.log("tak") : console.log("nie");
*/

/*
uniwersalnaZmienna = kolory.sort();
console.log(uniwersalnaZmienna);
*/

/*
dlugoscTablicy = kolory.reverse();

console.log(dlugoscTablicy);
*/



/*
for (var i=0; i<kolory.length; ++i){
	console.log(i);
	console.log(kolory[i]);
}

kolory.forEach ( function(element, iteration)  {
				console.log(iteration + " " + element);
				});


var napis = kolory.join("");
console.log(napis);
*/


"use strict";

/*
function Osoba(imie, nazwisko) {
	
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wzrost;
	this.oczy;
	this.wyswietlInfo = function() {
		console.log ( "Imię: " this.imie + "\n" 
					 + "Nazwisko: " + this.nazwisko + "\n" 
					 + "Wzrost: " + this.wzrost + "\n"	
					 + "Oczy: " + this.oczy);
	}
}

var ania = new Osoba("Ania");

ania.wzrost = 164;
ania.oczy = niebieskie;
ania.wyswietlInfo();
*/

function Ksiazka (tytul) {
	
	this.tytul = tytul;
	this.autorka;
	this.jezyk;
	this.wyswietlInfo = function () {
		console.log("Tytuł: " + this.tytul + "\n"
				   + "Autorka: " + this.autorka + "\n"
				   + "Język: " + this.jezyk);
	}
}

var pozycja1 = new Ksiazka('"Piaskowa Góra"');

pozycja1.autorka = "Joanna Bator";

pozycja1.jezyk = "polski";

pozycja1.wyswietlInfo();

var pozycja2 = new Ksiazka('"Chmurdalia"')

pozycja2.wyswietlInfo();

/*
var Osoba = {
	imie: "Marcin",
	wzrost: 180,
	wyswietlDetale: function() {
		console.log(this.imie + " " + this.wzrost);
	}
}

Osoba.imie = "Kasia";
Osoba.wzrost = 170;

Osoba.wyswietlDetale();

var Ja = {
	imie: "Ania",
	nazwisko: "Kałudzińska",
	wzrost: 164,
	wyswietlDane: function() {
	console.log(this.imie + " " + this.nazwisko + " " + this.wzrost);
	}
}

Ja["imie"] = "Monika";
Ja.oczy = "niebieskie oczy";
Ja.wyswietlDane = function() {
	console.log(this.imie + " " + this.nazwisko + " " + this.wzrost + " " + this.oczy);
	}


delete Ja.nazwisko;

Ja.wyswietlDane();
*/

/*
var tablica2 = [2,3,4,5,6,7,8];
var sum = 0;
function sumaTablicy (tablica) {
	for (var i = 0; i < tablica.length; i++) {
  sum += tablica[i];
	}
	console.log(sum);
}

sumaTablicy(tablica2);
*/

/*
var sum = 0;

for (var i = 0; i < tablica.length; i++) {
  sum += tablica[i];
}

console.log('Your sum is ' + sum);
*/
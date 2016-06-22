# nodecopter-fun

Programmet

1.	Præsentation af dronerne
2.	Sikkerhed
3.	Hvordan gør man?
4.	Fri leg med dronerne
5.	evt. noget fælles mad, hvis nogen har lyst

---

# Præsentation af dronerne

## Den lille drone 

Hubsan 4x

<img src="http://quadcopterbase.com/wp-content/uploads/2014/08/IMG_2924.jpg" alt="hubsan x4" height="208" width="362">

* den kan flyve med en fjernbetjening
* slut


## Den "store" drone

ar.drone 2.0

<img src="https://www.dronegeeks.com/img/5b6a/ar-drone-20-elite-editionsa1_jpg_egdetail.jpg" alt="ar.drone 2.0" height="250" width="333">

* Den kan flyve med en "fjernbetjening"
* Har kamera
* Har sensorer (bla. højdemåler, gyroskop og "kompas") (den kan stå stille i luften)
* Åben og frit tilgængelig beskrivelse af styremåden. (den kan programmeres)

---

# Sikkerhed

## Den lille drone

* Speederen helt nedad, når dronen skal håndteres.
* Efter styrt skal batteri og styrtbøjle sættes på plads.

## Den "store" drone

* Nødstop - demonstration
* Startes altid fra gulvet.
* Efter styrt skal styrtbøjle sættes på plads.
* Ved manuel styring kombineret med panik: slip styringen. 
* Rotorne kan godt gøre naller, så stik ikke fingrene inden for bøjlen.

# Hvordan gør man?

## Manuel flyvning 

Demonstration

## Programmering

Den programmering vi laver er i javascript/node. 

Demo:

	var arDrone = require('ar-drone');
	var client  = arDrone.createClient();
	
	client.takeoff();
	
	client
	.after(5000, function() {
		this.clockwise(0.5);
	})
	.after(3000, function() {
		this.stop();
		this.land();
	});


Alle kommandoer: <https://github.com/felixge/node-ar-drone>
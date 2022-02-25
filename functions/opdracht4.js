console.log('Opdracht4');
// Opdracht 4a:
// Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht
// en de naam op de volgende manier samenvoegt:
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

// pseudocode
// defineer lege string naamTV
// definieer functie voegSamen en gebruik string methode concat();
let naamTV = "";
const getTVnaamSamengev = (tvobject) => {
    return naamTV.concat(tvobject.brand, " ", tvobject.type, " ", tvobject.name);
};

console.log("Naam TV:", getTVnaamSamengev(inventory[0]));


// Opdracht 4b:
// Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-.
// Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

let prijsTV = "";
const getFormPrice = (tvobject) => {
    return prijsTV.concat("€", Math.floor(tvobject.price), ",", tvobject.price % 10);
};
console.log('Price:', getFormPrice(inventory[0]));

// Opdracht 4c:
// Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm.
// Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes)
// en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.

// declareer array screenSizesTV
// definieer functie getScreenSizes met paramameter array met numerieke waardes,
// laat de functie de numerieke array waardes converteren en in een string array zetten
// maak een for loop aan en bereken voor elke positie in de numerieke array het aantal cm
// en zet de waarde met inch en de waarde in cm toe aan de string array screenSizesTV
// return deze als de loop is afgelopen
// roep de functie aan voor de available sizes van een bepaalde tv item uit de inventory array
// log dit in console

const getScreenSizesTV = (availSizes) => {
    let screenSizesTV = [""];
    let valNum = 0;
    console.log(availSizes);
    for (i = 0; i < availSizes.length; i++) {
        console.log(availSizes[0]);
        valNum = availSizes[i] * 0.39370;
        screenSizesTV += `${availSizes[i]} inch ( ${valNum} cm ) `;
    }
    ;
    return screenSizesTV;

};

console.log(getScreenSizesTV(inventory[0].availableSizes));

// document.getElementById("outputInches").innerHTML=valNum*0.39370;


//     Opdracht 4d:
//     Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
//     Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//
// pseudocode
//
// zet een unordered list op in html
// zorg voor de styling van deze lijst in css
// defineer id selector voor tv naam, tv prijs en tv sizes
// zet regels in html met tussen blokhaken waar wat komt te staan
// zet id selector bij betreffende html element
// definieer variabelen voor nodes in javascript en assign id-attributen
// const get = document.getElementById("id-attribuut");
// zet in de text content html document de in javascript berekende waardes
// get.textContent = .....;
const getTVnaam = document.getElementById("tv-naam");
const getTVprijs = document.getElementById("tv-prijs");
const getTVsizes = document.getElementById('tv-sizes');
getTVnaam.textContent = getTVnaamSamengev(inventory[3]);
getTVprijs.textContent = getFormPrice(inventory[3]);
getTVsizes.textContent = getScreenSizesTV(inventory[3].availableSizes);

// Opdracht 4e:
// Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
// De overkoepelende "tv-generator-functie" verwacht één parameter:
// de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

// Referentie maken naar ons element in HTML

// Format in een functie plaatsen
const tvDetailsFormat = (currentItem) => {
    console.log('cur', currentItem);
    getTVnaam.textContent = getTVnaamSamengev(currentItem);
    getTVprijs.textContent = getFormPrice(currentItem);
    getTVsizes.textContent = getScreenSizesTV(currentItem.availableSizes);

    return `
        <ul class="tv-details">
            <li>${getTVnaam.textContent}</li>
            <li>${getTVprijs.textContent}</li>
            <li>${getTVsizes.textContent}</li>
        </ul>
        `;
};
const getAllTVdetails = document.getElementById('all-tv-details');

console.log('dit is referentie', getAllTVdetails);

// Loopen door de array van frontend studenten en elke student in de functie plaatsen en het geheel afdrukken

for (let i = 0; i < inventory.length; i++) {

    console.log('last',i, tvDetailsFormat(inventory[i]));
   getAllTVdetails.innerHTML += `${tvDetailsFormat(inventory[i])}`
}
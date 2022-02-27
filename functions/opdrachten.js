// Opdracht 2 - Elementen in de DOM plaatsen

//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// definieer variabele totaalaantal
// ga alle array items een voor een na met behulp van een for loop
// bepaal voor elk item hoeveel er van verkocht zijn
// tel dit op bij totaalaantal
// log de uitkomst van totaalaantal in console nadat de for loop is afgelopen

let totaalVerkocht = 0;
console.log('opdracht2', inventory.length);
for (let i = 0; i < inventory.length; i++) {
    totaalVerkocht = totaalVerkocht + inventory[i].sold;
}

console.log(totaalVerkocht);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Definieer de kleur in CSS pagina.
// bepaal bij welk bestaand html element je een aanpassing wil maken
// zet een ID-attribuut bij dit html element.
// bepaal waar de dynamische waarde komt te staan en zet een naam tussen blokhaken in de HTML
// definieer constante voor deze node in javascript en spreek de getElement methode van het document object aan met parameter = ID-attribuut
const getdocAantal = document.getElementById("tot-sold");
console.log(getdocAantal);
console.log(totaalVerkocht);
// wijzig vervolgens de textContent property van deze constante om het ook in de html document te zetten
getdocAantal.textContent = totaalVerkocht;
//
//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// definieer variabele om totaal ingekocht in op te slaan
// ga met een for loop alle array items na
// tel in ingekochte aantal op bij de variabele
// log de waarde vande variabele na de for loop

let totaalIngekocht = 0;
for (let i = 0; i < inventory.length; i++) {
    totaalIngekocht = totaalIngekocht + inventory[i].originalStock;
}
console.log(totaalIngekocht);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// definieer id selector en ken de kleur blauw hier aan toe in css file
// maak html waar de ingekochte waarde komt te staan en zet een naam tussen blokhaken.
// zet id selector bij dit html element om referentie te maken
// definieer constante in javascript en spreek getElementById methode aan met parameter = ID attribuut
const getIngekocht = document.getElementById("tot-inkoop");
console.log(getIngekocht);
console.log(totaalIngekocht);
// zet via textcontent property de waarde ook in de html display;
getIngekocht.textContent = totaalIngekocht;
console.log(totaalIngekocht);


//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// defineer id selector voor nog te verkopen aantal
// zet regel in html met tuessen blokhaken een naam waar dit aantal komt te staan
// zet id selector bij dit html element
// definieer variabele voor node in javascript en assign totaal ingekocht -/- totaal verkocht
const getNogVerkopen = document.getElementById("tot-te-verkopen");
// zet in de text content html document de javascript berekende waarde
getNogVerkopen.textContent = totaalIngekocht - totaalVerkocht;

//Opdracht 3a:
// Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
// Dat er dubbele namen in zitten, is niet erg.

// pseudocode opdracht 3a:
// Gebruik array methode map
// log de nieuwe array in console
const tvMerken = inventory.map((stockItem) => {
    return stockItem.brand;
});
console.log(tvMerken);


// Opdracht 3b:
// Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

// pseudocode
// definieer functie getTVmerken en een string-array als parameter
// defineer een for loop
// declareer array met naam string voordat de  for loop begint;
// gebruik array methode push om voor elke i een stockitem aan de rij toe te voegen
// roep de functie aan met parameter = inventory
const getTVmerken = (tvObjecten) => {
    let string = [];
    for (let i = 0; i < tvObjecten.length; i++) {
        string.push(tvObjecten[i].brand);
    }
    return string;
};
console.log('result', getTVmerken(inventory));



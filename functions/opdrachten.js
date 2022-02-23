// Opdracht 2 - Elementen in de DOM plaatsen

//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// definieer variabele totaalaantal
// ga alle array items een voor een na met behulp van een for loop
// bepaal voor elk item hoeveel er van verkocht zijn
// tel dit op bij totaalaantal
// log de uitkomst van totaalaantal in console nadat de for loop is afgelopen

let totaalVerkocht = 0;
console.log('opdracht2',inventory.length);
for (let i= 0; i < inventory.length; i++) {
    totaalVerkocht = totaalVerkocht + inventory[i].sold;
}

console.log(totaalVerkocht);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Definieer de kleur in CSS pagina.
// bepaal bij welk bestaand html element je een aanpassing wil maken
// zet een ID-attribuut bij dit html element.
// bepaal waar de dynamische waarde komt te staan en zet een naam tussen blokhaken in de HTML
// definieer constante voor deze node in javascript en spreek de getElement methode van het document object aan met parameter = ID-attribuut
const getdocAantal = document.getElementById("totaal-sold");
console.log(getdocAantal);
console.log(totaalVerkocht);
// wijzig vervolgens de textContent property van deze constante om het ook in de html document te zetten
getdocAantal.textContent = totaalVerkocht;
//
//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
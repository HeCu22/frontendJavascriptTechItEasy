// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Definieer een constante voor de nieuwe tabel.
// Gebruik de Map methode om een nieuwe array te genereren vanuit de array 'inventory'.
// Definieer een parameter naam om het resultaat door te geven, en zet deze tussen de ronde haakjes.
// Return de tv-type naam in de call-back functie.
// Log de inhoud van de nieuwe array in de console.
// Verwachte uitkomst totaal 8 types: { type: '43PUS6504/12', type'....' }

const tvTypes = inventory.map ((stockItem) => {
return stockItem.type;
})

console.log(tvTypes);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Definieer een constante voor de nieuwe tabel.
// Gebruik de filter methode om een nieuwe array te genereren vanuit de array 'inventory'.
// Definieer een parameter naam om het resultaat door te geven, en zet deze tussen de ronde haakjes.
// Return afhankelijk van conditie sold >= originalStock ('volledig uitverkocht') in de call-back functie.
// Log de inhoud van de nieuwe array in de console.
// Verwachte uitkomst totaal 2 types: { type: '...', type'....' }

const uitverkochteItems = inventory.filter ((stockItem) => {
  return (stockItem.sold >= stockItem.originalStock);
})

console.log(uitverkochteItems);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Definieer een constante voor de nieuwe tabel.
// Gebruik de filter methode om een nieuwe array te genereren vanuit de array 'inventory'.
// Kies een parameter naam om het resultaat door te geven, en zet deze tussen de ronde haakjes.
// Return afhankelijk van conditie option ambilight is true ('beschikking over AmbiLight') in de call-back functie.
// Log de inhoud van de nieuwe array in de console.
// Verwachte uitkomst totaal 2 types: { type: '...', type'....' }
const stockitemsAmbilight = inventory.filter ((stockItem) => {
  return (stockItem.options.ambiLight);
})

console.log(stockitemsAmbilight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// gebruik de sort methode om de array inventors te sorteren van laag naar hoog, dus a - b en zet dit tussen de ronde haken
// vergelijk de property price
// log de inhoud van de array in de console.

inventory.sort((a,b) => a.price - b.price);

console.log(inventory);



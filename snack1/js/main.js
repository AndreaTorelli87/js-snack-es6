/*
   Creare un array di oggetti:
   Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
   Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici = [
   {"nome" : "Merida",        "peso" : 10},
   {"nome" : "Specialized",   "peso" : 8},
   {"nome" : "Gigetto",       "peso" : 15}
];

let pesoBici = 99;
let biciLeggera;

bici.forEach((oggetto) => {
   
   if(oggetto.peso < pesoBici){
      pesoBici = oggetto.peso;
      biciLeggera = oggetto;
   }
})

document.getElementById("biciPiuLeggera").innerHTML = 
`La Bici più leggera è la ${biciLeggera.nome} con ${biciLeggera.peso}kg di peso`;



// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
// const min = Math.min(...arr)
// console.log(min)


// let biciLeggera = bici.filter((pippo) => {

//    if (pippo.peso < bici.peso) {
//       return true;
//    }
//    return false;
// });

// console.log(biciLeggera);

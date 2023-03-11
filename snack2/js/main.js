/*
   Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
   Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
   Generare numeri random al posto degli 0 nelle proprietà:
   Punti fatti e falli subiti.
   Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
   {squadra : "Milan",  puntiFatti : 0, falliSubiti: 0},
   {squadra : "Inter",  puntiFatti : 0, falliSubiti: 0},
   {squadra : "Juve",   puntiFatti : 0, falliSubiti: 0}
];

squadre.forEach(elementi => {

   elementi.puntiFatti = generaNumeroRandom(1,20);
   elementi.falliSubiti = generaNumeroRandom(1,20);
});

console.log(squadre);

let nomiFalli = squadre.map(element => {
   let {squadra, falliSubiti} = element;
   return (`${squadra} ha subito ${falliSubiti} falli`);
}); 

console.log(nomiFalli);




function generaNumeroRandom(min, max) {
   const numeroRandom = Math.floor( Math.random() * (max - min + 1) ) + min;
   return numeroRandom;
}
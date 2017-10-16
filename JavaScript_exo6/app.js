//demande le mot à deviner//
var str = prompt("Choisissez un mot.");
//séparateur de lettres//
let mot=[];
mot.push(str);
console.log(mot)
var lettres = str.match(/.{1,1}/g);
console.log(lettres);
//affiche les nombre de lettres à deviner//
var bite = new Array(lettres.length);
console.log(bite);
//tableau de lettres devinées//

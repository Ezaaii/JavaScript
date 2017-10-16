//demande le mot à deviner//
var mot = prompt("Choisissez un mot.");
//séparateur de lettres//
let str1=[];
str1.push(mot);
console.log(str1);
var lettres = mot.match(/.{1,1}/g);
console.log(lettres);
//affiche les nombre de lettres à deviner//
var long = new Array(lettres.length);
console.log(long);
//tableau de lettres devinées//
let str2=[];

if (str1.length=0){
  console.log("Bravo, vous avez trouvé "+mot+".")
  } else {
    for (var i=0; i<9; i++){
      var mot2 = prompt("Nouvelle lettre:");
      str2.push(mot2);
      console.log(str2);
      if (mot2 == mot[i]){
        console.log("gg!");
      } else {
          console.log("raté");
          str2.pop(mot2[i]);
      }
    }
}

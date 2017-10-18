//demande le mot à deviner//
var mot = prompt("Choisissez un mot.");
//TABLEAU 1 (+ séparateur de lettres)//
let str1 = mot.match(/.{1,1}/g);
//affiche les nombre de lettres à deviner//
var long = new Array(str1.length);
console.log(long);
//TABLEAU 2 (vide)//
let str2=[];
//fin du programme équivaux au nombre de carractères à deviner//
var fin = str1.length;
//var d
var erreur=0;
//boucle secondaire : guess letter//
function guess(){
  var mot2 = prompt("Essayez une lettre (Vous avez fait "+erreur+" erreurs)");
  var correction = false;
  for (var i=0; i<str1.length;i++){
    if (mot2==str1[i]){
      str2[i]=(mot2);
      fin--;
      correction=true;
    }
  }
  if (correction){
    alert("GG!");
    document.getElementById("string2").innerHTML=(str2);
    document.write(mot2);
  } else {
    alert("raté!");
    document.write(mot2);
    erreur++;
  }
  console.log(str2);
}
//boucle principale//
while (fin>0){
  guess();
  if(fin==0){
    alert("Bravo, vous avez trouvé le mot [ "+mot+" ]!");
  } else if (erreur>4){
    alert("Désolé vous avez perdu. Le mot était [ "+mot+" ]");
    fin=0;
  }
}

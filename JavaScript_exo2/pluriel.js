var objet = prompt("Quel est votre objet préféré?");
var nombre = prompt("Combien en possédez vous?");

if (nombre == 0){
  document.write("Vous ne possédez pas de " + objet+". C'est ballot...");
} else if (nombre == 1){
  document.write("Vous possédez "+nombre+" "+objet+". 'Faudra en racheter.'");
} else if (nombre >= 2){
  document.write("Vous possédez "+nombre+" "+objet+"s! C'est beaucoup!")
} else {
  document.write("Nan mais 'faut mettre un nombre dans le deuxième popup")
}

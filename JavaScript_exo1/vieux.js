var agemax = prompt("Jusque quel âge pensez vous vivre?");
var age = prompt(" Quel age avez vous?");
var repas = prompt("combien de fois mangez vous par jours?");

document.write("Il vous reste : " + (((agemax - age)* 365)* repas) + " repas. Profitez bien. :^)")

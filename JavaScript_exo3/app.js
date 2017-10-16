var a = prompt("Première variable");
var b = prompt("Deuxième variable");
document.getElementById("chiffres").innerHTML = "(" + a + ") et (" + b + ")"
//soustraction//

function soustraction(a, b){
  return a - b;
}
document.getElementById("moins").innerHTML = soustraction(a, b);

//Division//

function division(a, b){
  return a / b;
}
document.getElementById("divi").innerHTML = division(a, b);

//multiplication//

function multiplication(a, b){
  return a * b;
}
document.getElementById("multi").innerHTML = multiplication(a, b);

//calcul de pourcentage//

function pourcentage(a, b){
  return (b/100)*a;
}
document.getElementById("pourcent").innerHTML = pourcentage(a, b);

//calcul de vitesse//

function vitesse(a, b){
  return a / b;
}
document.getElementById("vite").innerHTML = vitesse(a, b) + " Km/h";

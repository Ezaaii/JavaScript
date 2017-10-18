//exo 1//
var min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var plus = min+max;
console.log(min);
console.log(max);
console.log(plus);
//exo 2//
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);
console.log("chiffre à arrondir "+floatBateau)
console.log("Arrondi en dessous "+couleBateau);
console.log("Arrondi au dessus "+voleBateau);
//exo 3//
var min = Math.floor(50);
var max = Math.ceil(100);
console.log("Random entre 50 et 100 :");
console.log(Math.floor(Math.random() * (max - min)+50));

var one = Math.random();
console.log("Random entre 0 et 1 :");
console.log(Math.round(one));

var ten = Math.floor(Math.random()*11);
console.log("Random entre 0 et 10 inclus :");
console.log(ten);
//exo 4//
let mortalkombat=["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]
var randomValue = mortalkombat[Math.floor(mortalkombat.length * Math.random())];
console.log(randomValue);

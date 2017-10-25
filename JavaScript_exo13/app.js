// Exercices 1
//     Crée (en HTML) une DIV avec l'id "character"
//     Faire changer de couleur de fond a cette DIVà chaque fois qu'on appuie sur une numéro de 0 à 9 sur le clavier
//
//     Tip : utiliser le switch
var up = document.getElementById("up");
var left = document.getElementById("left");
var down = document.getElementById("down");
var right = document.getElementById("right");
var char = document.getElementById("character");
var color = ["purple", "red","orange","yellow","lime","green","SeaGreen","cyan","lightblue","blue"];
function randomcolor(){
  var value = Math.floor(Math.random()*color.length);
  return color[value];
}
document.addEventListener("keydown", function(event){
  var kaaay = event.key;
  kaaay = String(kaaay);
  console.log(kaaay);
  if ( (kaaay == "0")|| (kaaay == "1")||(kaaay == "2")||(kaaay == "3")||(kaaay == "4")||(kaaay == "5")||(kaaay == "6")||(kaaay == "7")||(kaaay == "8")||(kaaay == "9")){
    char.style.backgroundColor = color[kaaay];
  } else if  ((kaaay == "ArrowUp")) {
    up.classList.add("alpha");
  } else if ((kaaay == "ArrowDown")){
    down.classList.add("alpha");
  } else if ((kaaay == "ArrowLeft")){
    left.classList.add("alpha");
  } else if ((kaaay == "ArrowRight")){
    right.classList.add("alpha");
  }
});
document.addEventListener("keyup", function(event){
       up.classList.remove("alpha");
       down.classList.remove("alpha");
       left.classList.remove("alpha");
       right.classList.remove("alpha");
});

// Exercices 2
//     Crée (en HTML) 4 divs avec les id suivantes : "up, down, left, right"
//     crée une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
//     Pour chaque div ajouter la classe 'highlight' quand une des touches directionel est enfoncée
//     Pour chaque div retier la classe 'highlight' quand on relâche la touche
//
//     Tip : Faire la structure HTML sans JavaScript

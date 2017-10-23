// #EXERCICE 1 :

var body=document.getElementsByTagName("body")[0];
  body.classList.remove("bg-aqua");
  body.classList.add("bg-olive");
var firstpara=document.getElementById("first-paragraph");
  firstpara.classList.remove("bg-lime", "gray");
  firstpara.classList.add("aqua");
var classbgsil=document.getElementsByClassName("bg-silver")[0];
  classbgsil.classList.remove("bg-silver");
  classbgsil.classList.add("bg-teal");
var blocq=document.getElementsByTagName("blockquote");
for (var i = 0; i < blocq.length; i++) {
  blocq[i].classList.add("bg-white");
}

// EXERCICE 2 :

var table=document.querySelector("#my-table");
  table.classList.add("bg-purple");
var cont=document.querySelectorAll('.container');
for (var i = 0; i < cont.length; i++) {
  cont[i].classList.add('shadow');
}


// EXERCICE 3

var pre=document.querySelectorAll('pre');
for (var i = 0; i < pre.length; i++) {
  pre[i].style.color = "blue";
  pre[i].style.backgroundColor="pink";
  pre[i].style.borderTop="3px solid red";
  pre[i].style.borderBottom="3px solid red";
}
var hache3=document.getElementsByTagName('h3')[0];
  hache3.innerHTML=("<em>Italic title ! yeah !</em>");
var hache2=document.getElementsByTagName('h2')[0];
  hache2.innerHTML=("<strong>HTML doens't work !</strong>");

// EXERCICE 4 :

var Uelle=document.getElementsByTagName('ul')[0];
var elleI=document.createElement("li");
  elleI.innerHTML=("Mon meilleur ami est <a href='http://www.google.com'>Google</a>");
Uelle.appendChild(elleI);
var lien=document.getElementsByTagName('a')[1];
  lien.style.color="red";

// EXERCICE 4 :

var Oelle=document.getElementsByTagName('ol')[0];
  while (Oelle.children.length > 0){
    Oelle.removeChild(Oelle.children[0]);
  };
let tablO=["Silent Teacher","Code Monkey", "CodeCombat"];
for (var i = 0; i < tablO.length; i++) {
  var OelleI=document.createElement('li');
  OelleI.innerHTML=(tablO[i]);
  Oelle.appendChild(OelleI)
}

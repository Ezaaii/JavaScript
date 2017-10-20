var guess = 0;
var essais = 0;
var min = 20;
var max = 80;
var chiffre = random();
var end = 0;
function random(){
  return (Math.floor(Math.random()*(max - min)+20));
}
for (i=0; i<(essais+1); i++){
  if (end<1){
    var guess = window.prompt("Devinez le juste prix! (entre 20 et 80)");
    essais++;
    console.log(guess);
    compare();
  } else {
    window.confirm("fin");
  }
}
function compare(){
  if (chiffre==guess){
    window.alert("C'est juste tu as trouvé en "+essais+" coups!");
    end++;
  } else if (chiffre>guess){
    window.alert("C'est plus!");
  } else if (chiffre<guess){
    window.alert("C'est moins!");
  }
}

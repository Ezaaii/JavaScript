//exo PNJ
let Character = {
  name : "Lily",
  age : 23,
  items : ["Baton magique", "HeavenlyCookie", "Pain", "Carnet de dessin", "Balais volant"],
}
function GiveItem(){
  return randomValue = Character.items[Math.floor(Character.items.length * Math.random())];
}
for (var key in Character) {
  console.log(key+" : "+Character[key]);
}
console.log("Lily vous donne : "+GiveItem());;
//Exo Shop
console.log("//////////////////")
console.log("///    SHOP    ///");
console.log("//////////////////")
console.log('Marchand : "Bonjour Aventurier! Bienvenue dans mon échoppe! Certains appellent ça des déchets, moi j'+"'"+'appelle ça des trésors!"');
let sword = {
    title : "Epée en fer",
    damage : (20),
    magic : (0),
    Dps : (1.5),
    minLevel : (1),
    available : 2,
    prix : "20 gold",
}
let axe = {
    title : "Hache en fer",
    damage : (30),
    magic : (0),
    Dps : (0.8),
    minLevel : (1),
    available : 3,
    prix : "20 gold",
}
let staff = {
    title : "Baton des arcanes",
    damage : (0),
    magic : (300),
    Dps : (5),
    minLevel : (30),
    available : 1,
    prix : "500 gold",
}
let HPPot = {
    title : "Potion de vie",
    vie : (50),
    mana : (0),
    effect : ("none"),
    minLevel : (1),
    available : 50,
    prix : "2 gold",
}
let MPPot = {
    title : "Potion de mana",
    vie : (0),
    mana : (50),
    effect : ("none"),
    minLevel : (1),
    available : 50,
    prix : "2 gold",
}
let skooma = {
    title : "Skooma",
    vie : (0),
    mana : (0),
    effect : ("speed + 100"),
    minLevel : (10),
    available : 0,
    prix : "20 gold",
}
let shop = [sword, axe,staff,HPPot,MPPot,skooma];
function affichage(objet){
  for (i=0; i<shop.length; i++){
    console.log("objets : "+shop[i].title);
    if (shop[i].minLevel>=2){
      console.log("Niveau requis : lvl "+shop[i].minLevel)
    }
    console.log("En stock : "+shop[i].available);
    console.log("prix : "+shop[i].prix);
    if (shop[i].available == 0){
      console.log('Marchand : "Ne vous inquiètez pas, la prochaine cargaison de '+shop[i].title+' arrive."');
    }
    console.log("----------------------");
  }
}
affichage();
// Exo main character
console.log("//////////////////")
let mainCharacter = {
     name : "Ez",
     level : 25,
     life : 816,
     lifeMAX : 1000,
}
let weapon = {
    name : "Ez'calibure",
    damage : 500,
    skill : "Shining strike",
}
function attack(){
    return mainCharacter.name+" attaque avec "+weapon.name+" et inflige : "+weapon.damage*mainCharacter.level+" dommages.";
}
console.log(attack());
// Exo bonus

console.log("//////////////////")
let Adversaire = {
     name : "Alduin",
     level : mainCharacter.level+5,
     life : mainCharacter.lifeMAX+50000,
     lifeMAX : mainCharacter.lifeMAX+50000,
}
let skill = {
    name : "Souffle mortel",
}
function receiveDamage(){
    return mainCharacter.lifeMAX/10;
}
function fight(){
    console.log("///    Tour 1    ///");
    console.log(mainCharacter.name+" attaque "+Adversaire.name);
    console.log("avec l'arme : "+weapon.name);
    console.log("et lui inflige "+weapon.damage*mainCharacter.level+" de dégats.");
    console.log(Adversaire.name+" à maintenant "+(Adversaire.life-(weapon.damage*mainCharacter.level))+" de vie.");
    console.log("///    Tour 2    ///");
    console.log(Adversaire.name+" attaque "+mainCharacter.name);
    console.log("avec : "+skill.name);
    console.log("et lui inflige "+receiveDamage()+" de dégats.");
    console.log(mainCharacter.name+" à maintenant "+(mainCharacter.life-receiveDamage())+" de vie.");
}
fight();

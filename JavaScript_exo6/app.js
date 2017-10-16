function splitString(entree, separator) {
  var arrayOfStrings = entree.split(separator);
  for (var i=0; i < arrayOfStrings.length; i++)
  console.log(arrayOfStrings[i] + " / ");
}
var virgule = ",";
var entree = prompt("Choisissez un mot.");
splitString(entree, virgule);
let mot=[];
mot.push(entree);
console.log(mot)

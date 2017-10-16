var add=0;
let chiffre=[1,2,3,4,5,6,7,8,9];
for (let i=0; i<9; i++){
  add = add+chiffre[i];
  console.log(add-chiffre[i]+" + "+chiffre[i]);
  console.log(add);
  document.write(add-chiffre[i]+" + "+chiffre[i]+"<br>");
  document.write(add+"<br>");
}

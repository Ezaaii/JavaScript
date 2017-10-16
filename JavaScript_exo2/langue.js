var langue = prompt("quel est votre langue? (fr, en ou es)")

if(langue=="fr") {
  document.write("Bonjour tout le monde!");
  } else if(langue=="en") {
    document.write("Hello World!");
  } else if (langue=="es") {
    document.write("Holà Mundo!");
  } else {
    document.write("Error, no language matching your request.");
  }

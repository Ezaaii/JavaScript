///////////////////
//CHARGER LE JSON//
///////////////////
function loadjson(toLoad, callback) {
  console.log("> loadJason(" + toLoad + ", callback);");
  var loadData = new XMLHttpRequest();
  loadData.overrideMimeType("application/json");
  loadData.open("GET", toLoad);
  console.log("loadData : " + loadData);
  loadData.onload = function() {
    if (loadData.readyState == 4 && loadData.status == "200") {
      callback(loadData.responseText);
    }
  }
  loadData.send(null);
  console.log("loadData : " + loadData);
}

////////////////////
//FUNCT PRINCIPALE//
////////////////////
function main(){
    console.log("> stating main() function");
    //on crée deux variable qui vont retenir les infos du json
    var truejson = [];
    var people = [];
    // on appelle le json
    var toLoad = "https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json"
    loadjson(toLoad, function(response){
      truejson = JSON.parse(response);
      people = JSON.stringify(truejson);
      console.log("peopleList : \n" + people);
      document.write("<h2>people : </h2>" + people);
      document.write("<h2>randScore : </h2>");

      ////////////////////////////
      //RANDOM NUMBER 0 /-/ 1000//
      ////////////////////////////
      for (let i in truejson) {
        //le code du mathrandom
        var randomScore = Math.floor(Math.random()*1001);
        //on met le score en lien avec le json
        truejson[i].score = randomScore;
        document.write("<br/>" + truejson[i].name + " : " + truejson[i].score);
        console.log("randomScore : " + truejson[i].score);
      } //fin randomScore

      //sort qui va trier les scores
      truejson.sort(function(a, b) {
         return a.score - b.score;
      }); //fin sort

      people = JSON.stringify(truejson);
      console.log("people : \n" + people);
      document.write("<h2>people (after score)</h2>" + people);
      document.write("<h2>Arrays</h2>");

      /////////////////
      //TRI PAR SCORE//
      /////////////////
      //on crée 3 string pour séparer les ppl
      var arrayA = []; // > 750
      var arrayB = []; // > 500
      var arrayC = []; // < 500
      for (let i in truejson) {
        var score = Number(truejson[i].score);
        var ppl = JSON.stringify(truejson[i]);
        if (score<=500) {
          arrayC.push(ppl);
        } else if (score > 500 && score < 750){
          arrayB.push(ppl);
        } else {
          arrayA.push(ppl);
        }
      }//fin tri par score

      document.write("A : " + arrayA);
      document.write("<br/>B : " + arrayB);
      document.write("<br/>C : " + arrayC);

      ///////////////////////////////////////
      //tri par personnes venant de Bahrain//
      ///////////////////////////////////////
      //nouveau string pour les ppl de bar
      var frombar = [];
      for (let i in truejson) {
        var from = JSON.stringify(truejson[i].country);
        var ppl = JSON.stringify(truejson[i]);
        if (from == '"Bahrain"') {
          frombar.push(ppl);
        }
      }
      console.log("> from Bahrain = " + frombar);
      var combien = frombar.length;
      console.log("How much from Bahrain : " +combien);
       document.write("<h2>How much from Bahrain</h2>" + combien);

      ////////////////////
      //score max et min//
      ////////////////////
      //new strin pour lister les scores
      var listScore = [];
      for (let i in truejson) {
        var score = truejson[i].score;
        listScore.push(score);
      }
      console.log("listScore : \n" + listScore);
      //var pour trouver les min et max
      var min = Math.min(...listScore);
      var max = Math.max(...listScore);
      console.log("min : " + min + "\nmax : " + max);
  }); //fin loadjson
}
main();

//f*ck cet exo! DANG J'en ai marre!

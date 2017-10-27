/////////////
//Load JSON//
/////////////
function loadjson(toLoad, callback) {
  console.log("> Loading Json")
  var loadData = new XMLHttpRequest();
    loadData.overrideMimeType("application/json");
    loadData.open("GET", toLoad);
    loadData.onload = function() {
      if (loadData.readyState == 4 && loadData.status == "200") {
        callback(loadData.responseText);
      }
    }
    loadData.send(null);
}
////////
//main//
////////
function main(){
    var jason = [];
    var people = [];
    //callback JSON//
    var toLoad = "becode.json"
    loadjson(toLoad, function(response){
      jason = JSON.parse(response);
      people = JSON.stringify(jason);
      //fin callback//
      for (let i in jason){
        console.log("> Loading card : "+ jason[i].name + " ...");
        /////////////
        //DOM Cards//
        /////////////
          //elements get//
          var blocs=document.getElementsByClassName('blocs')[i];
          var blocos=document.getElementsByClassName('blc')[i];
          var Ahlala=document.getElementsByTagName('a')[i];
          var txt=document.getElementsByClassName("txt")[i];
          //bloc//
          var blocos=document.createElement("div");
            blocos.classList.add("blc");
            blocs.appendChild(blocos);
          //lien//
          var Ahlala=document.createElement("a");
            Ahlala.href=(jason[i].link);
            Ahlala.target=("_blank")
            blocos.appendChild(Ahlala);
          //image//
          var images=document.createElement("div");
            images.classList.add("img");
            images.style.backgroundImage=("url('"+jason[i].img+"')");
            Ahlala.appendChild(images);
          //zone texte//
          var txt=document.createElement("div");
            txt.classList.add("txt");
          Ahlala.appendChild(txt);
          //nom//
          var Name=document.createElement("h2");
            Name.innerHTML=(jason[i].name);
            txt.appendChild(Name);
          //post//
          var Post=document.createElement("p");
            Post.innerHTML=(jason[i].post);
            txt.appendChild(Post);
      }
    });
};
main();

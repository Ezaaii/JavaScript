// Exercices 1

var hoverMe = document.getElementsByClassName("hoverMe");
  for (i=0;i<hoverMe.length;i++) {
       var thisElem = hoverMe[i];
       var thisElemName = thisElem.className;
       thisElem.addEventListener("mouseover", function(event) {
          event.preventDefault();
          this.classList.add("hidden");
  });
}

// Exercices 2

var reset = document.getElementById("reset");
reset.addEventListener("click", function(event){
  event.preventDefault();
  for (var i = 0; i < hoverMe.length; i++) {
    var object = hoverMe[i];
    object.classList.remove("hidden");
  }
});

// Exercices 3

var iks = document.getElementById("axe-x");
var ygrek = document.getElementById("axe-y");
document.addEventListener("mousemove", function(event){
  var x = event.clientX;
  var y = event.clientY;
  iks.innerHTML="x ( "+x+" )";
  ygrek.innerHTML="y ( "+y+" )";
});

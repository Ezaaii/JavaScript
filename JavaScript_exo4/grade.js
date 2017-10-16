for (cote = 0; cote < 101; cote ++){
  if (cote >= 90){
    console.log("Pour " + cote + " points, vous avez le grade A. ")
  } else if (cote >= 80) {
    console.log("Pour " + cote + " points, vous avez le grade B. ")
  } else if (cote >= 70) {
    console.log("Pour " + cote + " points, vous avez le grade C. ")
  } else if (cote >= 65) {
    console.log("Pour " + cote + " points, vous avez le grade D. ")
  } else {
    console.log("Pour " + cote + " points, vous avez le grade F. ")
  }
}

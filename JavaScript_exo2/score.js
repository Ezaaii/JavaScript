var score = prompt("Quel est votre score?");
if (score <= 50 ) {
  document.write("Vous avez un C");
  } else if ( score <= 89 ) {
    document.write("Vous avez un B");
  } else if( score >= 90 ) {
    document.write("Vous avez un A");
  } else {
    document.write("Rentrez un score.")
  }

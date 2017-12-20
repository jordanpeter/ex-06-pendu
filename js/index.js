var motArray=['B','O','N','J','O','U','R'];
var guessArray=['','','','','','',''];
var x = 0 ;
function guessLetter() {
     while(x<motArray.length){
     var lettre = prompt("Une lettre frr ?");
          for (var i = 0; i < motArray.length; i++) {
               if(motArray[i] == lettre){
                    guessArray[i] = lettre;
                    alert("Bien joué ! Lettre trouvée");
                    console.log(guessArray);
                    x++;
               }
     }
     }
     alert("BIEN JOUER TA GAGNER FRR");
}
guessLetter();

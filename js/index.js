var motArray=['B','O','N','J','O','U','R'];
var guessArray=['','','','','','',''];
var x = 0 ;
var i = 0;
function guessLetter() {

          while(x<motArray.length) {
               var lettre = prompt("Une lettre frr ?");
               if(lettre == motArray[i]){
                    guessArray[i] = lettre;
                    x++;
                    alert("Bien joué ! Lettre trouvée");
                    console.log(guessArray);
               }
               else{
                    i++;
               }
     }


console.log(guessArray);
}
guessLetter();
// check for in

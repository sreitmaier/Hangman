//Hangman Game Beautiful Version Sabine Reitmaier 

var guessWord = " ";
var i;
var hangCounter = 0;
var winCounter= 0;
var interimWord = " ";


//START OF THE GAME 

//returns a random word to start the game 
var words = ["Terroralarm", "Hummer", "Teleplay", "Detektiv", "Welt"];
var wordsRandom = floor(random(0,5));

var getRandomWord = function (){
    return words [wordsRandom];
};

guessWord = getRandomWord();
guessWord = guessWord.toUpperCase();


//takes the length of guessWord and draws the corresponding symbol "-"  
    for (var i = 0; i < guessWord.length; i++){
        fill(0, 0, 0);
        textSize(19);
        text("_",50 + i*50/2,350);
    }


//GAME PLAY

//user inputs keys from keyboard
var keyReleased = function() {

//input control : initiates a variable for key input and makes it UpperCase
var keyInput = String(key).toUpperCase();


//CHECK KEYBOARD INPUT IN RELATION TO GUESSWORD

    //loop key thru guessWord Array over its full length with two if conditions
    for (var i = 0; i < guessWord.length; i++){
    
    /* if key is a match in guessWord, draw key at matched position of the guessWord array
    (also in the key is a match condition:) if input keys are not part of the interim word, 
    set the winCounter forward by one step*/
        
        if (guessWord[i] === keyInput){
            fill(0, 0, 0);
            textSize(14);
            text(keyInput,50 + 50*i/2,350);
    
            if (interimWord.includes(keyInput) === false){
                 winCounter = winCounter + 1;
                }
       }
    
    }

// build a interim word, add the input key
interimWord = interimWord + keyInput;


// GAME DEVELOPMENT 

// WinCondition 
    if (winCounter === guessWord.length) {
        textSize(19);
        text(" YEAH - YOU WIN !!",50,400);
    
    }

//LooseCondition

  if  (guessWord.includes(keyInput) === false){
        hangCounter = hangCounter + 1 ;
        //println( "Hangman Part" + " " + hangCounter);
        // draw parts of hangman related to hangCounter
        
        switch (hangCounter){
            case 1: //Ground 
            fill(255, 255, 255);
            strokeWeight(2);
            arc(200, 275,200,200, 180, 360);
            break;
            case 2:  //First Pole
            line(200,172,200,100);
            break;
            case 3:  //Second Pole
            line(200,100,240,100);
            break;
            case 4: //Third Pole 
            line(200,122,220,100);
            break;
            case 5://Noose 
            line(240, 120,241,100);
            break;
            case 6://Hangman Head
            ellipse(240,125,10,13);
            break;
            case 7://Hangman Body 
            line(240,132,240,154);
            break;
            case 8://Hangman Arm 1 
            line(240,135,250,145);
            break;
            case 9: //Hangman Arm 2 
            line(230,145,240,135);
            break;
            case 10://Hangman Leg 1
            line(230,165,240,155);
            break;
            case 11://Hangman Leg 
            line(250,165,240,155);
            textSize(19);
            text(" SORRY - YOU LOOSE !!",50,400);
            break;
        }
        
    }
    

};








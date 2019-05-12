

//Variables
var wordBank=['arijit','balvin','pitbul','akon', 'luis', 'usher', 'bryan', 'shakira'];

var audio1 = new Audio('assets/music/arijit.mp3');
var audio2 = new Audio('assets/music/balvin.mp3');
var audio3 = new Audio('assets/music/pitbull.mp3');
var audio4 = new Audio('assets/music/akon.mp3');
var audio5 = new Audio('assets/music/luis.mp3');
var audio6 = new Audio('assets/music/usher.mp3');
var audio7 = new Audio('assets/music/bryan.mp3');
var audio8 = new Audio('assets/music/shakira.mp3');

var wins=0;
var loss=0;
var wrongLetter=[];//incorrectly guessed letters
var gussesLeft=6;
var underScores=[];
var userGuesses=[];//user guess
var randWord;
var currentImage = 1;
var hintletter;
var hint1;
var hint2;
var hints;


//play this song when this application is open
var audio = new Audio('assets/music/justinTim.mp3');
    //audio.autoplay = true;
    audio.play();
    //audio.pause();
    //audio.reload;

//Function starts from here
    function startGame(){
        //pick any random word from the word bank
        randWord=wordBank[Math.floor(Math.random()*wordBank.length)];
        console.log(randWord);
    
        ///////////////////////////
        //Get and display the hints on the screen
        hintletter = randWord;
        hint1 = hintletter.substring(0, 1);
        hint2 = hintletter.substring(3, 4);
        console.log(hint1);
        console.log(hint2);
        document.getElementById('hintid').textContent = hint1+","+hint2;
        //document.getElementById('hint').textContent = hint2;
        ///////////////////////////

    //print underscore = random word size
        for(var i = 0; i < randWord.length; i++)
        {
            // console.log(i);
            underScores.push(' _ ');
            
        }
        //Print underscore
        document.getElementById('word-blanks').textContent = underScores.join();
        console.log(underScores);

        //print guess left value on the score board
        document.getElementById('gl').textContent = gussesLeft;
        randWord= randWord;
    
    }

    function replaceImg()
    {
       currentImage++;
    
    if(currentImage===1)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_1.png";
        console.log("passing if1");
    }
    if(currentImage===2)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_2.png";
        console.log("passing if2");
    }
    if(currentImage===3)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_3.png";
        console.log("passing if3");
    }
    if(currentImage===4)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_4.png";
        console.log("passing if4");
    }
   if(currentImage===5)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_5.png";
        console.log("passing if5");
    }
    if(currentImage===6)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_6.png";
        console.log("passing if6");
    }
   if(currentImage===7)
    {
        document.getElementById("hangman_1").src = "assets/images/Hangman_7.png";
        console.log("passing if7");
    }
    

    }
////////////////////////////////////////////////////////////////////////
    function playAgain(){
    //pick any random word from the word bank
    randWord=wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(randWord);
   
    ///////////////////////////
    //Get and display the hints on the screen
    hintletter = randWord;
    hint1 = hintletter.substring(0, 1);
    hint2 = hintletter.substring(3, 4);
    console.log(hint1);
    console.log(hint2);
    document.getElementById('hintid').textContent = hint1+","+hint2;
    ///////////////////////////
    setTimeout(function() {
        $('#random-guess').text("");
    }, 2000);
   //reset the score card to default value
    // Wins=0;
    gussesLeft =6;
    document.getElementById('gl').textContent = gussesLeft;
    wrongLetter = [];
    currentImage = 1;
    document.getElementById('wg').textContent = wrongLetter;


   //print underscore = random word size
        underScores=[];
        //print underscore = random word size
        for(var i = 0; i < randWord.length; i++)
        {
            // console.log(i);
            underScores.push(' _ ');
            
        }


    //Print underscore
    document.getElementById('word-blanks').textContent = underScores.join();
    console.log(underScores);

    //print guess left value on the score board
    document.getElementById('gl').textContent = gussesLeft;
    randWord= randWord;
}
////////////////////////////////////////////////////////////////////////

    //change the pic to you won
    function youWon() {
        document.getElementById("hmImage").src = "assets/images/win.png";
        setTimeout(function() {
            document.getElementById("hmImage").src = "assets/images/Guess_the_Singer.png";

            // document.getElementById("hangman_7").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_6").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_5").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_4").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_3").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_2").src = "assets/images/Hangman_1.png";

            document.getElementById("hangman_1").src = "assets/images/Hangman_1.png";
        }, 2000);
      
    }

     //change the pic to you lost
    function youLost() {
        document.getElementById("hmImage").src = "assets/images/lost.png";
        setTimeout(function() {
            document.getElementById("hmImage").src = "assets/images/Guess_the_Singer.png";

            // document.getElementById("hangman_7").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_6").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_5").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_4").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_3").src = "assets/images/Hangman_1.png";
            // document.getElementById("hangman_2").src = "assets/images/Hangman_1.png";

            document.getElementById("hangman_1").src = "assets/images/Hangman_1.png";

        }, 2000);
        
    }

    

    //refresh the page/start a fresh game
    function reloadPage() {
        location.reload();
        }
    
    function playTrack(){
        audio.pause();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();

        if(randWord ===wordBank[0])
        {
            audio1.play();
        }
        else if(randWord ===wordBank[1])
        {
            audio2.play();
        }
        else if(randWord ===wordBank[2])
        {
            audio3.play();
        }
        else if(randWord ===wordBank[3])
        {
            audio4.play();
        }
        else if(randWord ===wordBank[4])
        {
            audio5.play();
        }
        else if(randWord ===wordBank[5])
        {
            audio6.play();
        }
        else if(randWord ===wordBank[6])
        {
            audio7.play();
        }
        else if(randWord ===wordBank[7])
        {
            audio8.play();
        }
        else
        {
            audio.play();
        }
    }

function winLose()
{   
   
    if(underScores.join('') == randWord)
    {
        //alert('Congratulations! You Won!');
        youWon();
        wins++
        document.getElementById('wn').textContent = wins;
        playTrack();
        playAgain();
    }
    else if(gussesLeft === 0)
    {
        $('#random-guess').text(randWord);
        //alert('You Lost! Try Again!');
        youLost();
        loss++;
        document.getElementById('ls').textContent = loss;

        setTimeout(function() {
            $('#random-guess').text("");
        }, 2000);

        // setTimeout(function() {
        //     $('#random-guess').text("");
        // }, 2000);
        playAgain();
        //reloadPage();//refresh the page
    }
}

document.onkeyup = function(event)
{
    userGuesses = event.key;
    console.log(userGuesses);

    //Chek if the letter exist inside of the word
    if(randWord.indexOf(userGuesses) >-1 ){
        for(var i = 0; i < randWord.length; i++)
        {
            if(randWord[i] === userGuesses)
            {

                underScores[i] = userGuesses;
                console.log(underScores);
                document.getElementById('word-blanks').textContent = underScores.join();
                console.log("i: "+i);
                winLose();
            }

        }
        
    }
    else{
        wrongLetter.push(userGuesses);
        gussesLeft--;
        document.getElementById('gl').textContent = gussesLeft;
        console.log(gussesLeft);
        console.log(wrongLetter);
        document.getElementById('wg').textContent = wrongLetter.join();

        //currentImage;
         console.log("current img="+currentImage);
		// 	var imageId = '#hangman_' + currentImage;
		// 	$(imageId).fadeTo(300, 1.0, function() {
		// 		if (currentImage == 7) {
        //             console.log(wrongLetter);
                    
		// 		}
        //     });
            replaceImg();
            winLose();
       
    }
}
     

//Main actions starts from here
startGame();

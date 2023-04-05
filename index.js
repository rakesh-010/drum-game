//to add an alert of i am clicked to all the buttons.
/** for(var i=0;i<x;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",getClick);
 } */


//to play an audio:
/**var aud=new Audio('sounds/tom-1.mp3');
aud.play(); */

//---------------------------------------------------screen touch creating sound----------------------------


//detecting the button press on screen by mouse or touch.
var x=document.querySelectorAll(".drum").length;
function getClick(y){
    // var y=this.innerHTML;//will retrieve the class a or w or s... from the drum button which is clicked.
    var aud;
    switch (y) {
        case "w":
            aud=new Audio('sounds/tom-1.mp3');
            aud.play();
        break;

        case "a":
            aud=new Audio('sounds/tom-2.mp3');
            aud.play();
        break;

        case "s":
            aud=new Audio('sounds/tom-3.mp3');
            aud.play();
        break;
        
        case "d":
            aud=new Audio('sounds/tom-4.mp3');
            aud.play();
        break;

        case "j":
            aud=new Audio('sounds/kick-bass.mp3');
            aud.play();
        break;

        case "k":
            aud=new Audio('sounds/snare.mp3');
            aud.play();
        break;

        case "l":
            aud=new Audio('sounds/crash.mp3');
            aud.play();
        break;
    
        default:
            console.log(y);
        break;
    }
}
for(var i=0;i<x;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var x=this.innerHTML;
        getClick(x);
        buttonAnimation(x);
    });
    
}

//in order to add audio to the website on response for clicking a key on the keyboard. 




//----------------------------------------keyboard press se creating sound----------------------------------


document.addEventListener('keydown',function(event){
    var x=event.key;
    getKey(x);
    buttonAnimation(x);
});//this adds the identifying the key press to the entire document 
//instead of any specific element. so, if any key is pressed while on the document, it will be able to 
//target it. So, we have to check for all the keys we need to produce sound.

function getKey(key){
    var aud;
    switch (key) {//key is a property of the event element that returns only the character that 
        //was pressed on the keyboard.
        case "w":
            aud=new Audio('sounds/tom-1.mp3');
            aud.play();
        break;

        case "a":
            aud=new Audio('sounds/tom-2.mp3');
            aud.play();
        break;

        case "s":
            aud=new Audio('sounds/tom-3.mp3');
            aud.play();
        break;
        
        case "d":
            aud=new Audio('sounds/tom-4.mp3');
            aud.play();
        break;

        case "j":
            aud=new Audio('sounds/kick-bass.mp3');
            aud.play();
        break;

        case "k":
            aud=new Audio('sounds/snare.mp3');
            aud.play();
        break;

        case "l":
            aud=new Audio('sounds/crash.mp3');
            aud.play();
        break;
    
        default:
            console.log(y);
        break;
    }
}



// -------------------------------------------animation-----------------------------------------------

function buttonAnimation(currentKey){
    var activeButton=document.querySelector('.'+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
var NumberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<NumberofDrumButtons; i++)

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
        
    {}
    document.addEventListener('keypress',function(event){
        makeSound(event.key)
    });
    
    function makeSound (key){
        switch (key) {
            case "w":
                var Siren = new Audio('eightoeightsiren.wav');
                Siren.play();
                break;
    
                case "a":
                    var Kick = new Audio("southsidekick.wav");
                    Kick.play();
                    break;
                    
                    case 's':
                        var Snare = new Audio ("ghostsnare.wav");
                        Snare.play();
                        break;
    
                        case 'd':
                    var Clap = new Audio("appleclap.wav");
                    Clap.play();
                    break;
    
                    case 'j':
                    var HiHat = new Audio("budhihat.wav");
                    HiHat.play();
                    break;
    
                    case 'k':
                    var Southside808 = new Audio("twoone.wav");
                    Southside808.play();
                    break; 
    
                    case 'l':
                    var Cymbol = new Audio("carcymbol.wav");
                    Cymbol.play();
                    break;
    }}
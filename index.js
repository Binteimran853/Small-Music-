let sound=document.getElementById("icon");
let Music=document.getElementById("mysound");
sound.onclick=function(){
 if(Music.paused){
    Music.play();
    sound.src="pause.png"
 }
 else {
    Music.pause();
    sound.src="play.png"
 }
}

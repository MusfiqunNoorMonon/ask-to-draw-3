let x,y;
let b=0;
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function listening(){
  document.getElementById('status').innerHTML="Listening....Speak now!";
  speak();
  recognition.start();
  recognition.onresult=function(event){
    console.log(event);
    var a=event.results[0][0].transcript.toLowerCase();
    document.getElementById("status").innerHTML="You said: "+ a;
    if (a.includes("circle")) {
        b=circle;
        x=prompt("x=?")
        y=prompt("y=?")
        radius=prompt("radius=?")
    } 
  }
}

function speak(){
  var synth=window.speechSynthesis;
  var utterThis=new SpeechSynthesisUtterance("Tell the shape you want to draw");
  synth.speak(utterThis);
}



function setup() {
  createCanvas(400, 400);
  background("lavender");
}

function draw() {
  if (b==circle){
    circle(x,y,radius)
  }
}

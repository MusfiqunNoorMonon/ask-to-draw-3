let x,y;
let b=0;
let speechgiven=0;
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
        b="Circle";
        x=Number(prompt("x=?"));
        y=Number(prompt("y=?"));
        radius=Number(prompt("radius=?"));
    } 
  }
}

function speak(){
  var synth=window.speechSynthesis;
  var utterThis=new SpeechSynthesisUtterance("Tell the shape you want to draw and write the values");
  synth.speak(utterThis);
}



function setup() {
  createCanvas(400, 400);
  background("pink")
}

function draw() {
  if (b=="Circle"){
    circle(x,y,radius);
    b=0;
    speechgiven=0;
  }
  else if (speechgiven==0){
    var synthI=window.speechSynthesis;
    var utterThisI=new SpeechSynthesisUtterance("You should Enter a number and you have to tell shape name");
    synthI.speak(utterThisI);
    speechgiven=1;
  }
}

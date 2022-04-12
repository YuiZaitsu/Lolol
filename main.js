var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
document.getElementById("text-box").innerHTML = "";
Recognition.start();

}

Recognition.onresult = function(event){
console.log(event);
content = event.results[0][0].transcript;
document.getElementById("text-box").innerHTML = content;
if(content=="take my selfie"){
    speak();
}
}



function speak(){
var synth = window.speechSynthesis;
var speak_data = "taking your Selfie In 5 seconds";

var utterthis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){

    take_snapshot();
save();

},5000);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });
 var camera = document.getElementById("camera");

 function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img src =' " + data_uri + "'id ='selfie_image'>";


});


 }
 
 function save(){
    var link=document.getElementById("link");
    var img=document.getElementById("selfie_image").src;
link.href=img;
link.click();
 }
 
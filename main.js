status1 = "";
objects = [];
function preload(){
    video = createVideo('video.mp4');
}
function setup(){
    canvas = createCanvas(480, 380);
canvas.center();
video.hide();
}
function modelloaded(){
    console.log("cocossd has loaded");
status1 = true
video.loop();
video.speed(1);
video.volume(0);
}
function start(){ 
    x = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}

function gotresult(error, result){
if(error){
    console.error(error);
}
else{
console.log(result);
objects = result;
}
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status1 != ""){
x.detect(video, gotresult);
for(i = 0; i < objects.length; i++){
  document.getElementById("status").innerHTML = "Status: Object Detected";
  document.getElementById('objects').innerHTML = "Number of Objects Detected: "+objects.length;
  fill("red");
  percent = floor(objects[i].confidence*100);
  text(objects[i].label+" "+percent+"%", objects[i].x + 13, objects[i].y + 15);
  noFill();
  stroke("red")
  rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
}
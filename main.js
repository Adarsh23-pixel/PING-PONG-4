function setup() {
  canvas = createCanvas(600,500);
  canvas.center();

   video = createCapture(VIDEO);
    video.hide();

 
}
poseNet = ml5.poseNet(video,ModelLoaded);
poseNet.on('pose',gotPoses);

function ModelLoaded (){
console.log("Model is loaded");
}
function gotPoses(results) {
if(results.length>0)  {
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

}
}






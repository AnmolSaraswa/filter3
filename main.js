a=0;
b=0;
function preload()
{
  img=loadImage("https://i.postimg.cc/V6HxFTmn/5896063dcba9841eabab60f7.png");
}
function setup() {
 Canvas= createCanvas(300, 300);
  Canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
  console.log("PoseNet is Intialised");
}
function gotPoses(results)
{
if(results.length>0)
{
  console.log(results);
  a=results[0].pose.nose.x-16;  
  b=results[0].pose.nose.y-3;  
  console.log("nose x = "+results[0].pose.nose.x);
  console.log("nose y = "+results[0].pose.nose.y);
}
}
function draw() {
image(video,0,0,300,300);
image(img,a,b,40,40);
}
function take_snapshot(){
    save('ram.png');
}
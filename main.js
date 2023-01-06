var leftWristX = 0;
var rightWristX = 0;
var difference = 0;
var poseNet = 0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(900, 340);
    canvas.position(250, 155);
    video = createCapture(VIDEO);
    video.size(570, 330);
    video.position(240, 160)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    textSize(22);
}
function draw()
{
    background("navy");
    fill("whitesmoke");
    text("Sarvesh", 550, 200);
    document.getElementById("font_side").innerHTML = "Font size is "+difference+"px."
}
function modelLoaded()
{
    console.log("Model Loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        console.log(leftWristX);
        rightWristX = results[0].pose.rightWrist.x;
        console.log(rightWristX);
        difference = Math.floor(rightWristX - leftWristX);
        console.log(difference);
        textSize(difference);
        text("Sarvesh", 700, 200);
    }
}
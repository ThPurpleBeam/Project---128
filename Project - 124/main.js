var song1=" "
var song2=" "
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
righttWristY = 0;
function preload()
{
    song1=loadSound("Super_mario.mp3");
    song2=loadSound("harrypotter1_theme_song.mp3");
}

function play()
{
    song1.play();
    song2.play();
    song1.setVolume(1);
    song1.rate(1);
    song2.setVolume(1);
    song2.rate(1);
}

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
// Intializing Pose Net
    poseNet = ml5.poseNet(video, modalLoaded);
// Exectuing Pose Net
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log('Pose Net is Initialized');
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses()
{
    if(result.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        leftWristY = results[0].pose.leftWristY.y;
        console.log("lestWristX = " + leftWristX +" leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWristX.x;
        rightWristY  = results[0].pose.rightWristY .y;
        console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
    }
}
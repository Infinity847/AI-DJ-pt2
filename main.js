var prosound = "";
function setup() 
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
     image(video,0,0,600,500);

}
function preload()
{
prosound = loadSound("music2.mp3");
}
function soundplay() 
{
    prosound.play();
}
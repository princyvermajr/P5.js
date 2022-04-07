function preload(){

}
function setup(){
canvas=createCanvas(800,800);
camera=createCapture(VIDEO);
camera.hide();
tint_color="";
}
function draw(){
image(camera,0,0,500,300);
tint(tint_color);
stroke(168, 10, 10);
    fill(168, 10, 10);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function tintcolor(){
    tint_color=document.getElementById("input1").value
}
function takesnapshot(){
    save("My.png")
}
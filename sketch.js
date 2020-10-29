

var walkingimg1;
var thunderimg1;
var batman;

function preload(){

walkingimg1 = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");

thunderimg1 = loadAnimation("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(600,700);

    batman = createSprite(300,600,10,10);
    batman.shapecolor = "red";
    batman.addAnimation("img1",walkingimg1);
    
}

function draw(){
    
}   


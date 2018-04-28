/**
 * Created by LW on 2018/4/27.
 */
var cvs1;
var cvs2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgpic=new Image();

var canvasWidth;
var canvasHeight;

var ane;
var fruit;
var mom;
var baby;
var mx;
var my;
document.body.onload=game();
function game() {
    init();
    lastTime =Date.now();
    deltaTime = 0;
    gameloop();
}
function init() {
//    获得canvas context
    cvs1=document.getElementById('canvas1');
    ctx1=cvs1.getContext('2d');
    cvs2=document.getElementById('canvas2');
    ctx2=cvs2.getContext('2d');

    cvs1.addEventListener('mousemove',onMouseMove,false);
    bgpic.src='images/background.jpg';
    canvasWidth=cvs1.width;
    canvasHeight=cvs1.height;

    ane=new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

    mom=new momObj();
    mom.init();

    baby=new babyObj();
    baby.init();

    mx=canvasWidth*0.5;
    my=canvasHeight*0.5;
}
function gameloop() {
    requestAnimationFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    if(deltaTime>40){
        deltaTime=40;
    }
    drawBackground();

    ane.draw();

    fruitMonitor();
    fruit.draw();

    ctx1.clearRect(0,0,canvasWidth,canvasHeight);
    mom.draw();
    momFruitCollision();
    baby.draw();
}

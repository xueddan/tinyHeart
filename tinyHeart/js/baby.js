/**
 * Created by LW on 2018/4/28.
 */
var babyObj=function () {
    this.x;
    this.y;
    this.angle;
    this.babyEye=new Image();
    this.babyBody=new Image();
    this.babyTail=new Image();
};
babyObj.prototype.init=function () {
    this.x=canvasWidth*0.5-50;
    this.y=canvasHeight*0.5+50;
    this.angle=0;
    this.babyEye.src="images/babyEye0.png";
    this.babyBody.src="images/babyFade0.png";
    this.babyTail.src="images/babyTail0.png";
}
babyObj.prototype.draw=function () {
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX);
    this.angle=lerpAngle(beta,this.angle,0.99);

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
    ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
    ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5+25,-this.babyTail.height*0.5);
    ctx1.restore();
};
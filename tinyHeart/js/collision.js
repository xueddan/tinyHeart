/**
 * Created by LW on 2018/4/28.
 */
function momFruitCollision() {
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
        //    坐标差
            var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){
                fruit.dead(i);
            }
        }
    }
}
var length = data.length;

//pintar todos los circulos
for(i=0;i<length;i++){
    var ball=data[i];
    create(ball.x,ball.y,ball.color);
}

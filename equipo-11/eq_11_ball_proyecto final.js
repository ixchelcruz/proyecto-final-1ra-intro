
var ball;
ball = create();

var x = 0;
var y = 0;
var counter = 0;
var counter1=0;
var counter2=0;

var data = [];
var m3=75;

for(var j=0; j<180; j++){
    y = j*5; // crear posiciones

    for(var i=0; i<75; i++){
        x = i*5; // crear posiciones
        // poner cada circulo en la lista que se llama data
        data.push({x:x,y:y,color:painting[counter]});
        counter++;  
    }

    for(var l=75; l<150; l++){
        x = l*5; // crear posiciones
        // poner cada circulo en la lista que se llama data
        data.push({x:x,y:y,color:painting1[counter1]});
        counter1++;  
    }

    
    for(var f=150; f<225; f++){
        x = f*5; // crear posiciones
        // poner cada circulo en la lista que se llama data
        data.push({x:x,y:y,color:painting2[m3-counter2]});
        counter2++;
    }
    m3=m3+75;
    counter2=0
} 

// escribe tu trabajo aqui
// -----------------------

var length = data.length;

for (a=0; a<length; a++){
    ball_a = data[a]
    create (ball_a.x, ball_a.y, ball_a.color)
}


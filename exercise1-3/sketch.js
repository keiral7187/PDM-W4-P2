function setup(){
    createCanvas(600,600)
}

function draw(){
    background(255);
    let y = 0
    while(y<600){
        stroke(0,0,255);
        line(300,300,600,y)
        stroke(164,9,201);
        line(600,600,0, y)
        stroke(0)
        line(600,0,0,y)
        y+=10
    }
}
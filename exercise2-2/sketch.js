let fillColour = 255;

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(255);
    let x = 0 
    while (x < width){
        fill(255);
        rect(x, 0, 50, height);
        if(mouseX >= x && mouseX <= x + 50){
            if(mouseIsPressed){
                fillColour = color(0,0,255);
                fill(fillColour)
                rect(x,0,50,height);
            } else {
                fillColour = (255);
            }
    }
    x += 50;
    }
}


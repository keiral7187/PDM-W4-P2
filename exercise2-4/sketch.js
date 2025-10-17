function setup() {
    createCanvas(400, 400);
}
 
 
function draw() {
    background(0);
    for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 50) { 
            if(x % 100 === 0 && y % 100 === 0 || x % 100 === 50 && y % 100 === 50){
                fill (0);
            } else {
                fill(255);
            }
            square(x, y, 50);
        }
    }
}
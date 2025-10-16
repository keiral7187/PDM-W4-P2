function setup() {
    createCanvas(400, 400);
}
 
 
function draw() {
    background(0);
    for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 50) { 
            square(x, y, 50);
        }
    }
}
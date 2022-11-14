function setup() {
    createCanvas(600, 400);

    background(3, 52, 10);
}


function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
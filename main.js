function setup(){
    createCanvas(640, 480);
}

function draw(){
    background('blue')
    var x = width/2;
    var y = height/2;
    //face
    noStroke();
    fill('white');
    ellipse(x, y, 200,200);
    
    //nose
    fill('#EFB8D2');
    ellipse(x,y+30,40,50);
    
    //left eye
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64, 64);
    
    //left pupil
    fill('black');
    ellipse(x+42, y-26, 40, 40);
    
    //right eye
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    // right pupil
    fill('black');
    ellipse(x-42, y-26, 40, 40);
    
    //left ear
    fill('white');
    push();
    translate(x-100, y-120);
    rotate(Math.PI/4);
    ellipse(0,0,80,80);
    pop();
    
    //right ear
    fill('white');
    push();
    translate(x+100, y-120);
    rotate(-Math.PI/4);
    ellipse(0,0,80,80);
    pop();
    
    //tonuge
    fill('#EE3E36');
    arc(x+20, y+60, 40, 80, 0, PI-QUARTER_PI, CHORD);
    
    //cheeks
    fill('black');
    push();
    translate(x-60, y+60);
    rotate(-Math.PI/4);
    ellipse(0,0,40,80);
    pop();
    
    fill('black');
    push();
    translate(x+60, y+30);
    rotate(Math.PI/4);
    ellipse(0,0,20,20);
    pop();
}
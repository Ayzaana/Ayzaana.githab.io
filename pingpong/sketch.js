let x=0;
let dx=10;
let y=400;
let dy=-5;
let xx=0;
let yy=0;
let c=10; //шаг
let b=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	//frameRate(1);
	y=windowHeight/2;
}

function draw() {
		background(150,100,100);
	
	text(b,30,30);
	
	ellipse(x,y, 25,25);
	x=x+dx;
	y=y+dy;
	if (x<0 || x>width) { 
		dx=-dx;
	}
		if (y<0 || y+15>height) { 
	 	dy=-dy;
	}
	
	yy=height-20;
	if (xx<0) xx=0; 
	else {
		if (xx+160>width) xx=width-160;
	}
	
	fill(100,100,250);
		rect(xx,yy,200,20);
	
	//function keyPressed() {
//	if (keyCode==ArrowLeft) xx=xx-c;
//	else {
//		if (keyCode===ArrowRight) xx=xx+c;
//	}
//	return false;
//	}
	
	//if (keyIsPressed===true && key==='a') {
	if (keyIsPressed===true && keyCode===37) {
	xx=xx-c
	}
	else {
	// if (keyIsPressed===true && key==='d')  xx=xx+c;
			if (keyIsPressed===true && keyCode===39)  xx=xx+c;
	}
	
		if((x>=xx) && (x<=xx+200) && (y>height-15)){
		b++;
	}

		
}
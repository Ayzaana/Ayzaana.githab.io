function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	noLoop(); // отключаю перерисовку
}

function draw() {
	translate(width/2-200, height/2+200);
	scale(1,-1);
	triangleIntriangle(200);
	
}

function triangleIntriangle(size) { //создаю функцию «Эллипс в эллипсе»
	if (size > 5) {
		triangle(0,0,2*size,0,size,2*size); // рисую круг с центром в точке 0,0 радиуса size
		triangle(0.5*size,size,1.5*size,size,size,0);
		triangleIntriangle(0.5*size ); // вызываю функцию
		push();
		translate(0.5*size,size);
		triangleIntriangle(0.5*size );
		pop();
		push();
		translate(size,0);
		triangleIntriangle(0.5*size );
		pop();
	}
}

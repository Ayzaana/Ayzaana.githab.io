function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	translate(width/2,height/2-200);
	scale(1,-1);
	//руки
	push();
	fill(600,100,150);
	translate(70,-120);
	rotate(radians(115));
	ellipse(50, 0, 110, 40);
	pop();
	
		push();
	fill(600,100,150);
	translate(-65,-120);
	rotate(radians(70));
	ellipse(50, 0, 110, 40);
	pop();
	
	//ноги
	
		push();
	fill(600,100,150);
	translate(0,-170);
	rotate(radians(-15));
rect(0,0,75,50);
	
	pop();
			push();
	fill(600,100,150);
	translate(-20,-120);
	rotate(radians(200));
rect(0,0,70,50);
	pop();
	
	push();
	fill(600,100,150);
		translate(0,-160);
	ellipse(80, 0, 60, 85);
	ellipse(-80, 0, 60, 85);
		pop();
	
	//след
		push();
	fill(600,200,300);
	stroke(600,200,300);
		translate(0,-160);
	ellipse(80, -10, 40, 45);
	ellipse(-80, -10, 40, 45);
		ellipse(62, 20, 8, 12);
	ellipse(-62, 20, 8, 12);
			ellipse(74, 25, 8, 12);
		ellipse(-74, 25, 8, 12);
		ellipse(86, 25, 8, 12);
			ellipse(-86, 25, 8, 12);
	ellipse(98, 20, 6, 10);
	ellipse(-98, 20, 6, 10);
		pop();
	
	
	push();
	fill(600,100,150);
	ellipse(0, -100, 120, 150); //туловище
			ellipse(40, 40, 40, 35); //уши
	ellipse(-40, 40, 40, 35); //уши
	pop();
	push()
	fill(600,200,300);
	stroke(600,200,300);
	ellipse(0, -100, 80, 100);   //туловище
	ellipse(40, 40, 25, 20); //уши
	ellipse(-40, 40, 25, 20);//уши
	pop();
	push();
	fill(600,100,150);
	ellipse(0, 10, 110, 100);//голова
	pop();
	ellipse(20, 20, 12, 12);//глаза
	ellipse(-20, 20, 12, 12);//глаза
		push();
	fill(0,0,0);
	ellipse(22, 22, 5, 7);//глаза
	ellipse(-18, 22, 5, 7);//глаза
	pop();
		push();
	fill(600,200,300)
	ellipse(0, -10, 70, 45); // часть для носа и губ
		pop();
		push();
	fill(0,0,0);
	ellipse(0, 5, 25, 15);	// нос
	pop();
			push();
	fill(600,200,300)
	arc(-5,5,50,65,radians(220), radians(280),open) ;// губы
	arc(5,5,50,65,radians(260), radians(320),open);//губы
			pop();
	line(0,-27,0,-5); //линия к носу
	
	
}
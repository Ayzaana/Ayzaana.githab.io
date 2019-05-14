let vkl=false;
let razmer=200;
let color="black";

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	//noLoop(); // отключаю перерисовку
}

function draw() {

  background(100);
  if(vkl) { //if(vkl=true) //то же самое
    translate(width/2-razmer, height/2+razmer);
	scale(1,-1);
    stroke(color);
	triangleIntriangle(razmer);
	} else {
		//textSize(20);
		//text("Нажмите на мышь", width/2-razmer/2, height/2-razmer/2);
	}
	
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

function refresh(){
  OutText.innerHTML = vvod.value;
  if (!isNaN(Number(vvod.value))){ //если текст в поле ввода можно преобразовать в число
    razmer = Number(vvod.value); // то сделать диаметр равным этому числу
  }
}

function start() {
 
		vkl=true;

}


function refresh2(){
  OutText.innerHTML = vvod2.value;
    color = vvod2.value; // то сделать диаметр равным этому числу
}
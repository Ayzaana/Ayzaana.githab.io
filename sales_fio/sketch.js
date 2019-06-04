let vkl=false;
let banana;
let mandarin;
let item;

let sensor = []; 
let sensor2 = []; 

function preload() {
  img1 = loadImage('banana.jpg'); // имя файла
	img2 = loadImage('mandarin.jpg'); // имя файла
}

/*let data=[
    {banana:	459883,
mandarin:	368102	},
	{	banana:	553738,
mandarin:	203747},
	{ banana:	295517,
mandarin:	137681},
		{ banana:	362820,
mandarin:	47117},
	{banana:	418378,
mandarin:	662},
	{banana:	328952,
mandarin:	46},
	{banana:	282030,
mandarin:	29},
	{banana:	217181,
mandarin:	1092},
	{banana:	154851,
mandarin:	188},
	{banana:	142680,
mandarin:	6541},
	{banana:	200117,
mandarin:	191038},
	{banana:	265601,
mandarin:	557021} ];*/

let data=[
	    {banana:	71837,
mandarin:	84737},
    {banana:	107842,
mandarin:	85515},
	{	banana:	114540,
mandarin:	81307},
	{banana:	114925,
mandarin:	84465},
			{ banana:	122360,
mandarin:	72486},
		{banana:	136137,
mandarin:	56472},
		{banana:	152083,
mandarin:	47619},
		{banana:	146740,
mandarin:	43508},
	{banana:	106297,
mandarin:	36959},
	{banana:	71850,
mandarin:	35162},
	{banana:	64653,
mandarin:	32032},
	{banana:	37441,
mandarin:	29105},
	{banana:	72085,
mandarin:	22162},
	{banana:	72775,
mandarin:	13103},
	{banana:	80711,
mandarin:	16092},
	{banana:	88087,
mandarin:	12351},
	{banana:	98366,
mandarin:	3408},
		{banana:	96040,
mandarin:	622},
			{banana:	101717,
mandarin:	143},
					{banana:	109375,
mandarin:	47},
		{banana:	76107,
mandarin:	17},
			{banana:	85007,
mandarin:	12},
					{banana:	57837,
mandarin:	21},
		{banana:	95926,
mandarin:	10},
			{banana:	81305,
mandarin:	8},
					{banana:	67746,
mandarin:	3},
		{banana:	77797,
mandarin:	7},
			{banana:	79323,
mandarin:	11},
					{banana:	43888,
mandarin:	7},
		{banana:	55958,
mandarin:	5},
			{banana:	66587,
mandarin:	1},
	{banana:	62421,
mandarin:	26},
	{banana:	51038,
mandarin:	710},
	{banana:	16192,
mandarin:	291},
	{banana:	47435,
mandarin:	83},
	{banana:	42084,
mandarin:	63},
	{banana:	33704,
mandarin:	63},
	{banana:	33897,
mandarin:	29},
	{banana:	33251,
mandarin:	18},
	{banana:	34242,
mandarin:	20},
	{banana:	25514,
mandarin:	12},
	{banana:	30698,
mandarin:	149},
	{banana:	36408,
mandarin:	4308},
	{banana:	41445,
mandarin:	6271},
	{banana:	43449,
mandarin:	13824},
		{banana:	49527,
mandarin:	26488},		
{banana:	49372,
mandarin:	87843},
{banana:	44526,
mandarin:	79524},
{banana:	44299,
mandarin:	84086},
{banana:	48318,
mandarin:	96951},
{banana:	47801,
mandarin:	127398},
{banana:	99230,
mandarin:	205760},
{banana:	13576,
mandarin:	21972}];

let data1 = [{
	name: "Яблоки",
	percent: "20%",
	angle1: 0,
	angle2: 73,
	x: 800,
	y: 200,
	color: "lime"},

{name: "Бананы",
	percent: "13%",
	angle1: 73,
	angle2: 119,
	x: 650,
	y: 150,
	color: "yellow"
},
{name: "Огурцы",
	percent: "11%",
	angle1: 119,
	angle2: 160,
	x: 550,
	y: 200,
	color: "green"
},
						 
{name: "Томаты",
	percent: "9%",
	angle1: 160,
	angle2: 192,
	x: 500,
	y: 300,
	color: "red"
},
{name: "Мандарин",
	percent: "8%",
	angle1: 192,
	angle2: 220,
	x: 550,
	y: 380,
	color: "orange"
},
{name: "Остальное",
	percent: "39%",
	angle1: 220,
	angle2: 360,
	x: 700,
	y: 420,
	color: "blue"
}	];


function setup() {
	createCanvas(1400, 600);
	//background(100);
	  bananacolor = color( 300,400,100);
  mandarincolor = color( 250,0,0);
	//	noFill(); // без заливки
	frameRate(1); // 5 кадров в секунду
}


function draw() {
	
	 background(255);

if(vkl) {

	//РИСУНОК ДИАГРАММЫ(СТОЛБЫ)
	 // noStroke();
  /*for(var i=0;i<data.length; i++){
  fill(bananacolor);
  var creamht = height-90-(data[i].banana*50);
  rect(140+i*80, creamht, 30, data[i].banana*50);
  fill(mandarincolor);
  rect(140+i*80, creamht-data[i].mandarin*50, 30, data[i].mandarin*50);
  }	 */
	
	if(item=='банан') {
//РИСУНОК КООРДИНАТ
  cupline(600-110);
  cupnum (600-110);
  pplline(70);
  pplnum (70);
	
//НАДПИСИ НАЗВАНИЙ ОСЕЙ КООРДИНАТ
	  noStroke();
	push();
	textAlign(LEFT, CENTER);
	text("С\nУ\nМ\nМ\nА\nР\nН\nЫ\nЕ", 20, 90);
  text("П\nР\nО\nД\nА\nЖ\nИ\n", 20, 230);
	text("З\nА", 20, 300);
  	text("2\n0\n1\n8\n \nГ\nО\nД", 20, 390);

	pop();
  text("НОМЕР НЕДЕЛИ", 1400/2, 600-30);
	
	//НАДПИСИ В ПРАВОМ ВЕРХНЕМ УГЛУ
	  stroke(0);
  strokeWeight(1);
  fill(bananacolor);
  rect(1400-200, 20, 20, 20);
  fill(mandarincolor);
  rect(1400-200, 50, 20, 20);
	
		  //key
  noStroke();
  fill(0);
  text("= Банан", 1400-170, 35);
  text("= Мандарин", 1400-170, 65);
	
  image(img1, 750, 50, 300, 300);
	//банан
	for (let index = 0; index < data.length; index++) {
	sensor.push(data[index].banana);
    }

	beginShape();
		push();
noFill(); 
	stroke(bananacolor);
	strokeWeight(5); // толщина линии 4 (стандартная 1)
	for(let i=0;i<data.length; i++) { // прохожу по всем элементам массива
		vertex(113+i*23, 600-90-40*(sensor[i]/20000));
		endShape();
	}
	pop();
	
    }
  else 	if(item=='мандарин') {
//РИСУНОК КООРДИНАТ
  cupline(600-110);
  cupnum (600-110);
  pplline(70);
  pplnum (70);
	
//НАДПИСИ НАЗВАНИЙ ОСЕЙ КООРДИНАТ
	  noStroke();
	push();
	textAlign(LEFT, CENTER);
	text("С\nУ\nМ\nМ\nА\nР\nН\nЫ\nЕ", 20, 90);
  text("П\nР\nО\nД\nА\nЖ\nИ\n", 20, 230);
	text("З\nА", 20, 300);
  	text("2\n0\n1\n8\n \nГ\nО\nД", 20, 390);

	pop();
  text("НОМЕР НЕДЕЛИ", 1400/2, 600-30);
	
	//НАДПИСИ В ПРАВОМ ВЕРХНЕМ УГЛУ
	  stroke(0);
  strokeWeight(1);
  fill(bananacolor);
  rect(1400-200, 20, 20, 20);
  fill(mandarincolor);
  rect(1400-200, 50, 20, 20);
	
		  //key
  noStroke();
  fill(0);
  text("= Банан", 1400-170, 35);
  text("= Мандарин", 1400-170, 65);
	
	//мандарин
	  image(img2, 500, 100, 400, 300);
		for (let index = 0; index < data.length; index++) {
	sensor2.push(data[index].mandarin);
    }

	beginShape();
		push();
	noFill(); 
	stroke(mandarincolor);
	strokeWeight(5); // толщина линии 4 (стандартная 1)
	for(let i=0;i<data.length; i++) { // прохожу по всем элементам массива
		vertex(113+i*23, 600-90-40*(sensor2[i]/20000));
		endShape();
	}
	pop();
	
  }
  else if(item=='оба товара') {
//РИСУНОК КООРДИНАТ
  cupline(600-110);
  cupnum (600-110);
  pplline(70);
  pplnum (70);
	
//НАДПИСИ НАЗВАНИЙ ОСЕЙ КООРДИНАТ
	  noStroke();
	push();
	textAlign(LEFT, CENTER);
	text("С\nУ\nМ\nМ\nА\nР\nН\nЫ\nЕ", 20, 90);
  text("П\nР\nО\nД\nА\nЖ\nИ\n", 20, 230);
	text("З\nА", 20, 300);
  	text("2\n0\n1\n8\n \nГ\nО\nД", 20, 390);

	pop();
  text("НОМЕР НЕДЕЛИ", 1400/2, 600-30);
	
	//НАДПИСИ В ПРАВОМ ВЕРХНЕМ УГЛУ
	  stroke(0);
  strokeWeight(1);
  fill(bananacolor);
  rect(1400-200, 20, 20, 20);
  fill(mandarincolor);
  rect(1400-200, 50, 20, 20);
	
		  //key
  noStroke();
  fill(0);
  text("= Банан", 1400-170, 35);
  text("= Мандарин", 1400-170, 65);
	
    	//банан
	for (let index = 0; index < data.length; index++) {
	sensor.push(data[index].banana);
    }

	beginShape();
		push();
noFill(); 
	stroke(bananacolor);
	strokeWeight(5); // толщина линии 4 (стандартная 1)
	for(let i=0;i<data.length; i++) { // прохожу по всем элементам массива
		vertex(113+i*23, 600-90-40*(sensor[i]/20000));
		endShape();
	}
	pop();
	
    
	//мандарин
	
		for (let index = 0; index < data.length; index++) {
	sensor2.push(data[index].mandarin);
    }

	beginShape();
		push();
	noFill(); 
	stroke(mandarincolor);
	strokeWeight(5); // толщина линии 4 (стандартная 1)
	for(let i=0;i<data.length; i++) { // прохожу по всем элементам массива
		vertex(113+i*23, 600-90-40*(sensor2[i]/20000));
		endShape();
	}
	pop();
  }
	else {
		push();
		textSize(30);
text("Соотношение продаж фруктов и овощей за 2018 год", 200, 50);	
	
for (let j=0; j<data1.length;j++) {
fill(data1[j].color);	
arc(700, 350, 500, 500, radians(-data1[j].angle2), radians(-data1[j].angle1), PIE);
fill("black");
textSize(30);
text(data1[j].percent, data1[j].x, data1[j].y);
push();
stroke(0);
textSize(20);
strokeWeight(1);
fill(data1[j].color);
rect(1400-200, 20+30*j, 20, 20);
noStroke();
  fill(0);
  text("=" + data1[j].name, 1400-170, 35+30*j);
	pop();
	pop();
}

	}
}	
	
}

function cupline (ypos) {
  stroke(0);
  strokeWeight(4);
  for( let x = 90; x < 1400; x += 23){
    line(x, ypos+20, x, ypos+40);
		 strokeWeight(1);
		line(90, ypos+20, 2000, ypos+20);
  }
}

function cupnum (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = 90, n=0; y < 1400; y += 46, n++){
    strokeWeight(4);
    line(y, ypos, y, ypos+40);
    noStroke();
    text(2*n.toString(), y, ypos+60);
  }
}

function pplline (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = 600-90; y > 0; y -= 40){
    line(ypos, y, ypos+40, y);
		  strokeWeight(1);
		line(ypos+20,500,ypos+20, -500);
  }
}

function pplnum (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = 600-90, n=0; y > 0; y -= 40, n++){
    strokeWeight(4);
    line(ypos, y, ypos+40, y);
    noStroke();
    text(20000*n.toString() , ypos-20, y);
  }
} 


function start() {
 
		vkl=true;

}

function refresh(){
  OutText.innerHTML = vvod.value;
    item = vvod.value; // то сделать диаметр равным этому числу
}

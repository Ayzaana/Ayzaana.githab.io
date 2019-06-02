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

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(100);
	  bananacolor = color( 300,400,100);
  mandarincolor = color( 250,0,0);
	//	noFill(); // без заливки
	frameRate(1); // 5 кадров в секунду
}


function draw() {
	
	 background(255);

if(vkl) {
//РИСУНОК КООРДИНАТ
  cupline(height-110);
  cupnum (height-110);
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
  text("НОМЕР НЕДЕЛИ", windowWidth/2, windowHeight-30);
	
	//НАДПИСИ В ПРАВОМ ВЕРХНЕМ УГЛУ
	  stroke(0);
  strokeWeight(1);
  fill(bananacolor);
  rect(windowWidth-200, 20, 20, 20);
  fill(mandarincolor);
  rect(windowWidth-200, 50, 20, 20);
	
		  //key
  noStroke();
  fill(0);
  text("= Банан", windowWidth-170, 35);
  text("= Мандарин", windowWidth-170, 65);
	
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
  image(img1, 650, 200, 300, 300);
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
		vertex(113+i*23, height-90-40*(sensor[i]/20000));
		endShape();
	}
	pop();
	
    }
  else 	if(item=='мандарин') {
	//мандарин
	  image(img2, 500, 100, 300, 300);
		for (let index = 0; index < data.length; index++) {
	sensor2.push(data[index].mandarin);
    }

	beginShape();
		push();
	noFill(); 
	stroke(mandarincolor);
	strokeWeight(5); // толщина линии 4 (стандартная 1)
	for(let i=0;i<data.length; i++) { // прохожу по всем элементам массива
		vertex(113+i*23, height-90-40*(sensor2[i]/20000));
		endShape();
	}
	pop();
	
  }
  else {
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
		vertex(113+i*23, height-90-40*(sensor[i]/20000));
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
		vertex(113+i*23, height-90-40*(sensor2[i]/20000));
		endShape();
	}
	pop();
  }
}	
	
}

function cupline (ypos) {
  stroke(0);
  strokeWeight(4);
  for( let x = 90; x < windowWidth; x += 23){
    line(x, ypos+20, x, ypos+40);
		 strokeWeight(1);
		line(90, ypos+20, 2000, ypos+20);
  }
}

function cupnum (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = 90, n=0; y < windowWidth; y += 46, n++){
    strokeWeight(4);
    line(y, ypos, y, ypos+40);
    noStroke();
    text(2*n.toString(), y, ypos+60);
  }
}

function pplline (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = windowHeight-90; y > 0; y -= 40){
    line(ypos, y, ypos+40, y);
		  strokeWeight(1);
		line(ypos+20,500,ypos+20, -500);
  }
}

function pplnum (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = windowHeight-90, n=0; y > 0; y -= 40, n++){
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

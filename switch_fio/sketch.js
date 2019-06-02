let myText2 = "Томат, огурец, кабачок";
let myText = "Апельсин, яблоко, банан";
let fruits = myText.split(", "); // разделяем текст на слова по
//«, » и засовываем в массив fruits
let vegetables = myText2.split(", ");
let Nhighlighting = -1; //номер подсвеченного элемента, изначально -1;
let Nhighlighting2 = -1;
function setup() {
	createCanvas(400, 400);

}

function draw() {
	background(220);
	for (let index = 0; index < fruits.length; index++) {
			for (let index2 = 0; index2 < vegetables.length; index2++) {
		if (index === Nhighlighting) {
			stroke("yellow");
		} else {
			stroke("black");
		}
		ellipse(0.33*width, height / 2 - 50 + index * 50, 100, 30);
		textAlign(CENTER, CENTER);
		text(fruits[index], 0.33*width, height / 2 - 50 + index * 50);
		if (index2 === Nhighlighting2) {
			stroke("yellow");
		} else {
			stroke("black");
		}
		ellipse(0.66*width, height / 2 - 50 + index2 * 50, 100, 30);
		text(vegetables[index2], 0.66*width, height / 2 - 50 + index2 * 50);
	}
	}
}

function keyPressed() {
	if (keyCode === 32) { // пробел, номер взят с keycode.info
		if (Nhighlighting < 2) { //если номер подсвеченного не
			//дошёл до последнего
			Nhighlighting++; // увеличиваем его на 1, то есть переводим на следующий
		} else if(Nhighlighting2 < 2) {
			Nhighlighting=3;
			Nhighlighting2++;
		}
		else if(Nhighlighting===3&&Nhighlighting2===2){
			Nhighlighting=0;
			Nhighlighting2=3;
		} 
		else {
			Nhighlighting=3;
			Nhighlighting2=0;
		}
	}
}
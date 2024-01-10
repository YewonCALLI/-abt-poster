let lapse = 0;  
let pg;
let pg2;
let image1;
let image2;
let image3;
let image4;

function preload(){
	image1 = loadImage('title.svg');
	image2 = loadImage('title2.svg');
	image3 = loadImage('title3.svg');
	image4 = loadImage('logo.png');
}

function setup() {
  pg2 = createCanvas(500, windowHeight*0.9);
  pg = createGraphics(500,600);
  background('white');
  rectMode(CENTER);
  
}

function draw() {
	// var clr1 = color("hotpink")
	// var clr2 = color("#pink")
	// var clr3 = color("#pink")
	// for(var x=0;x<width;x+=30){ 
	//   for (var y=0;y<height;y+=10){
	// 	  //var ratio = map(x,0,width,0,1)
	// 	var ratio = 0;
	// 	  var middleColor = lerpColor(clr1,clr2,ratio)
	// 	  var middleColor2 = lerpColor(clr2,clr3,ratio)
	// 	  pg.fill("hotpink")
	// 	  pg.ellipseMode(CENTER)
	// 	  pg.ellipse(x+random(-60,60),150+frameCount*5+random(-110,110),frameCount/55)
	// 	  pg.ellipse(x+random(-60,60),250+frameCount*5+random(-110,110),frameCount/55)
	//   	fill(middleColor2)
	// 	  pg.ellipse(x+10+random(-60,60),450+frameCount*5+random(-110,110),frameCount/33,frameCount/55,5)
	//   }
	// }
	background("white");
  	frameRate(3);
  	image(pg,0,0);
  
  stroke("#00FF9D");
	for (let i = 0; i < 300; i++) {
		let x = randomGaussian(0.5, 0.18) * width;
		let y = randomGaussian(0.5, 0.12) * height;
		backInTheDay(x, y);
	}

	for (let i = 0; i < 20; i++) {
		let x = randomGaussian(0.5, 0.18) * width;
		let y = randomGaussian(0.5, 0.12) * height;
		let s = random(width) * random(random(1.5));
		strokeWeight(random(random(3)));
		if(random()<0.5){
			square(x, y, s);
		}else{
			circle(x, y, s);

		}
	}
	
	imageMode(CENTER);
	image(image1, 250, 160, 450, 270);
	image(image2, 475, height-170, 15, 300);
	image(image4, 475, 20, 36,24);
	imageMode(LEFT);
	image(image3, 140,height-125, 89.6*3, 79.2*3);
}

function backInTheDay(x, y) {
	let c = int(random(10, 50));
	let scl = 0.009;
	let rnd = int(random(4));
	strokeWeight(random(random(2)));
	noFill();
	beginShape();
	if (rnd == 0) {
		for (let i = 0; i < c; i++) {
			let n = noise(x * scl, y * scl, i * 0.00001);
			let angle = int(n * 10) * (TAU / 4);
			vertex(x, y);
			x += cos(angle) * 8;
			y += sin(angle) * 8;
		}
		endShape();
	}
	else if (rnd == 1) {
		for (let i = 0; i < c; i++) {
			let n = noise(x * scl, y * scl, i * 0.00001);
			let angle = 10 * n;
			vertex(x, y);
			x += cos(angle) * 8;
			y += sin(angle) * 8;
		}
		endShape();
	}

	else if (rnd == 2) {
		for (let i = 0; i < c; i++) {
			let n = noise(x * scl, y * scl, i * 0.001);
			let angle = int(n * 15) * (TAU / 4);
			strokeWeight(random(random()));
			circle(x, y, random(random(10)));
			x += cos(angle) * 8;
			y += sin(angle) * 8;
		}
	}

	else if (rnd == 3) {
		for (let i = 0; i < c; i++) {
			let n = noise(x * scl, y * scl, i * 0.001);
			let angle = 15 * n;
			strokeWeight(random(random()));
			circle(x, y, random(random(10)));
			x += cos(angle) * 8;
			y += sin(angle) * 8;
		}
	}
}

function windowResized() {
	resizeCanvas(500, windowHeight*0.9);
  }

// function keyPressed() {
//   if (key === 's') {
//    saveCanvas(pg2, 'myCanvas', 'jpg');
//   }
// }
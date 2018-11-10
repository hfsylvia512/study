
var CANVANS_WIDTH = 500, CANVANS_HEIGHT = 500;

var myCanvas,context;
window.onload = function(){
	createCanvas();
	// drawRect();
}

function createCanvas(){
	document.body.innerHTML = "<canvas id='myCanvas' width='"+CANVANS_WIDTH+"' height='"+CANVANS_HEIGHT+"'></canvas>"
	myCanvas = document.getElementById("myCanvas");
	context = myCanvas.getContext("2d");
}

function drawRect(){
	context.fillStyle = "#ff0";
	// context.rotate(45);
	// context.translate(200,200);
	context.scale(2,0.5);
	context.fillRect(0,0,200,200);
}

// 创建图像
function drawImage(){
	var img = new Image();
	img.onload = function(){
		context.drawImage(img,0,0);
	}
	
}
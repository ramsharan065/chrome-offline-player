var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
context.moveTo(0,0);
context.lineTo(200,200);
context.stroke();

//creating new canvas
var newCanvas = document.createElement("canvas");
newCanvas.id = "ncanvas";
newCanvas.width = 200;
newCanvas.height = 200;

document.getElementById("newCanvasHolder").appendChild(newCanvas);

newCanvas.getContext("2d").drawImage(canvas, 0, 0);


//create canvas and copy the image in it
var newCanvas = document.createElement("canvas");
newCanvas.id = "ncanvas";
newCanvas.width = 200;
newCanvas.height = 200;

document.body.appendChild(newCanvas);

var canvas = document.getElementsByClassName("runner-canvas")[0];

var timer = setInterval(function(){
	if(Math.random() > 0.9){
		newCanvas.getContext("2d").clearRect(0, 0, newCanvas.width, newCanvas.height);
		newCanvas.getContext("2d").drawImage(canvas, 0, 0);	
	}
}, 100);
newCanvas.getContext("2d").drawImage(canvas, 0, 0);




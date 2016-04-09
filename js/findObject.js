window.onload = function(){
	console.log("on find object js");
	var canvas = document.getElementById("sceneCanvas");
	var context = canvas.getContext("2d");
	var image = document.getElementById("sceneImage");
	context.drawImage(image,0,0);

	var playground = document.getElementById("sceneCanvas");
	var playgroundWidth = playground.width;
	var playgroundHeight = playground.height;
	var context = playground.getContext("2d");
	var imageData = context.getImageData(0,0,playgroundWidth,playgroundHeight);
	var data = imageData.data;

	var startHorizontal = 70;
	var startVertial = 118;
	var currentIndex;
	var color;
	for (var i = startHorizontal; i < playgroundWidth; i++) {
		currentIndex = (startVertial*playgroundWidth*4) + i*4;
		color = data[currentIndex];
		if (color > 3) {
			console.log(i - startHorizontal);
			console.log(i, data[currentIndex], data[currentIndex+1], data[currentIndex+2], data[currentIndex+3]);	
			// console.log(data[currentIndex]);
			// console.log(data[currentIndex+1]);
			// console.log(data[currentIndex+2]);
			// console.log(data[currentIndex+3]);	
		}
		
	}

	for (var i = 0; i < data.length; i++) {
		if (data[i] == 255) {
			console.log("found 255");
		}
	}
	console.log(data[0]);
}
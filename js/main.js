function Player () {
}

Player.prototype.jump = function () {
	var k = 38;
	var oEvent = new KeyboardEvent('keydown', {
		keyCode: k,
		which: k
	});

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
        get : function() {
            return k;
        }
    });     
    Object.defineProperty(oEvent, 'which', {
        get : function() {
            return k;
        }
    });
    document.dispatchEvent(oEvent);
}

Player.prototype.down = function () {
	var k = 40;
	var oEvent = new KeyboardEvent('keydown', {
		keyCode: k,
		which: k
	});

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
        get : function() {
            return k;
        }
    });     
    Object.defineProperty(oEvent, 'which', {
        get : function() {
            return k;
        }
    });
    document.dispatchEvent(oEvent);
}

Player.prototype.up = function () {
	var k = 40;
	var oEvent = new KeyboardEvent('keyup', {
		keyCode: k,
		which: k
	});

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
        get : function() {
            return k;
        }
    });     
    Object.defineProperty(oEvent, 'which', {
        get : function() {
            return k;
        }
    });
    document.dispatchEvent(oEvent);
}

Player.prototype.run = function() {
	var that = this;
	var a = setInterval(function(){
		if (that.shouldJump()) {
			that.jump();		
		} else if (that.shouldDown()) {
			that.down();
			setTimeout(function(){
				var t = that;
				t.up();
			},500);
		}
	}, 100);		
}
Player.prototype.shouldJump = function() {
	var nearestObjectDistance = getNearestObjectDistance();
	console.log(nearestObjectDistance);
	return nearestObjectDistance > 0 && nearestObjectDistance < 80;
}

Player.prototype.shouldDown = function() {
	var nearestBirdtDistance = getNearestBirdDistance();
	console.log(nearestBirdtDistance);
	return nearestBirdtDistance > 0 && nearestBirdtDistance < 80;
}

function getNearestObjectDistance(){
	var nearestObjectDistance = 0;

	var playground = document.getElementsByTagName('canvas')[0];
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
		if (color > 50) {
			nearestObjectDistance = i - startHorizontal;
			break;
		}
	}
	return nearestObjectDistance;
}

function getNearestBirdDistance(){
	var nearestBirdDistance = 0;

	var playground = document.getElementsByTagName('canvas')[0];
	var playgroundWidth = playground.width;
	var playgroundHeight = playground.height;
	var context = playground.getContext("2d");
	var imageData = context.getImageData(0,0,playgroundWidth,playgroundHeight);
	var data = imageData.data;

	var startHorizontal = 70;
	var startVertial = 85;
	var currentIndex;
	var color;
	for (var i = startHorizontal; i < playgroundWidth; i++) {
		currentIndex = (startVertial*playgroundWidth*4) + i*4;
		color = data[currentIndex];
		if (color > 50) {
			nearestBirdDistance = i - startHorizontal;
			break;
		}
	}
	return nearestBirdDistance;
}


var player = new Player();
player.run();

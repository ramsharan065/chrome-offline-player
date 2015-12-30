console.log("hello");

// var canvas = document.getElementsByTagName("canvas")[0];
// var context = canvas.getContext("2d");
// context.getImageData(0,0,10,10);


function Player () {
}

Player.prototype.jump = function () {
	var k = 32;
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
Player.prototype.run = function() {
	var that = this;
	var a = setInterval(function(){
		if (that.shouldJump()) {
			that.jump();		
		};
	}, 100);		
}
Player.prototype.shouldJump = function() {
	return Math.random() > 0.5;
}


var player = new Player();
player.run();

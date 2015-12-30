console.log("hello");
var helloElement = document.getElementById("hello");
helloElement.addEventListener("click", function(){
	console.log("clicked");
});
document.addEventListener("keydown", function(event){
	console.log("keydown ", event);
});

// var event = new MouseEvent('click', {
// 	'view': window,
// 	'bubbles': true,
// 	'cancelable': true
// });
// helloElement.dispatchEvent(event);
// helloElement.dispatchEvent(event);

// function dispatchMouseClickEvent(element){
// 	var event = new MouseEvent('click', {
// 		'view': window,
// 		'bubbles': true,
// 		'cancelable': true
// 	});
// 	element.dispatchEvent(event);
// }

// function dispatchKeyboardEvent(k){
// 	var oEvent = new KeyboardEvent('keydown', {
// 		keyCode: k,
// 		which: k
// 	});

//     // Chromium Hack
//     Object.defineProperty(oEvent, 'keyCode', {
//                 get : function() {
//                     return k;
//                 }
//     });     
//     Object.defineProperty(oEvent, 'which', {
//                 get : function() {
//                     return k;
//                 }
//     });
//     document.dispatchEvent(oEvent);
// }

// // dispatchMouseClickEvent(helloElement);
// // dispatchKeyboardEvent(65);
// var a = setInterval(function(){
// 	if (shouldJump()) {
// 		dispatchKeyboardEvent(32);		
// 	};
// }, 100);

// function shouldJump(){
// 	return Math.random() > 0.5;
// }

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

function Player() {
	return 
}

var player = {
	shouldJump: function(){
		return Math.random() > 0.5;
	},
	jump: function () {
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
	},
	run: function() {
		var that = this;
		var a = setInterval(function(){
			if (that.shouldJump()) {
				that.jump();		
			};
		}, 100);
	}
}
player.run();
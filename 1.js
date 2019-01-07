document.getElementById('btn_l').onclick = sliderLeft;
document.getElementById('btn_r').onclick = sliderRight;

var left = 0;
var leftAuto = 0;
function sliderLeft() {
    var p;
    p = document.getElementById('polosa');
    left = left - 256;
    if (left < -1280) {
        left = 0;
    }
    p.style.left = left + 'px';
}

function sliderRight() {
   var p;
    p = document.getElementById('polosa');
    left = left + 256;
    if (left === 256) {
        left = -1280;
    }
    p.style.left = left + 'px';
}

function autoSlider() {
	setTimeout(function() {
		var p2;
    	p2 = document.getElementById('polosa2');
		leftAuto = leftAuto - 256;
    	if (leftAuto < -1280) {
        	leftAuto = 0;
    	}
    	p2.style.left = leftAuto + 'px';
	autoSlider();
	}, 1000);
}

autoSlider();
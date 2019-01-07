document.getElementById('btn').onclick = sliderLeft;
document.getElementById('btn-r').onclick = sliderRight;

var left = 0;
var right = 0;
function sliderLeft() {
    var p;
    p = document.getElementById('polosa');
    left = left - 256;
    if (left < -768) {
        left = 0;
    }
    p.style.left = left + 'px';
}

function sliderRight() {
   var p;
    p = document.getElementById('polosa');
    right = right + 256;
//    if (left < 768) {
//        left = 0;
//    }
    p.style.left = left - right + 'px';
}
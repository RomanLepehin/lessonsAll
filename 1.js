document.getElementById('btn_l').onclick = sliderLeft;
document.getElementById('btn_r').onclick = sliderRight;

var left = 0;
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

let animatedBoxes = document.getElementsByClassName('animated');
const timeBetweenInSeconds = 0.35;


function startAnimation() {
    let i;
    for (i = 0; i < animatedBoxes.length; ++i) {
        addRight(i);
    }
}


function stopAnimation() {
    let i;
    for (i = 0; i < animatedBoxes.length; ++i) {
        removeRight(i);
    }
}

function addRight(i){
    setTimeout(function () {
        animatedBoxes[i].classList.add('right');
    },timeBetweenInSeconds * 1000 * i);
}
function removeRight(i){
    animatedBoxes[i].classList.remove('right');
}

function hamburger(x) {
    x.classList.toggle("change");
    if (x.classList.contains("change")){
        startAnimation();
    } else {
        stopAnimation();
    }
}

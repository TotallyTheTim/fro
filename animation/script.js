
let animatedBoxes = document.getElementsByClassName('animated');
let checkbox = document.getElementById("hamburger");
const timeBetweenInSeconds = 0.35;

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        startAnimation();
    } else {
        stopAnimation();
    }
});

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

let animatedBoxes = document.getElementsByClassName('animated');
const timeBetweenInSeconds = 0.1;

function hamburger(x) {
    x.classList.toggle("change");

    let i;
    for (i = 0; i < animatedBoxes.length; ++i) {
        changeDivs(i);
    }
}

function changeDivs(i) {
    setTimeout(function () {
        animatedBoxes[i].classList.toggle('right');
    },timeBetweenInSeconds * 1000 * i);
}

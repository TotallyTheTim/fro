//Always starts the page at the Top.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//Init variables.
let buttons = document.getElementsByClassName('navbuttons');
let sections = document.getElementsByClassName('sectionPage');
let SectionDistanceFromTop = new Array('');
let counter = 0;
let currentSection = 0;

//update the header buttons.
classUpdate();

//sets current info to "int" (called and assigned in the index.html)
function set(int) {
    currentSection = int;
    classUpdate();
    goTo();
}

//scrolls to the right section.
function goTo() {
    window.scrollTo({
        top: getSectionTop(currentSection),
        behavior: "smooth"
    });
}

//gets the position away from the Top for the right section.
function getSectionTop(i) {
   return document.getElementsByClassName('sectionPage')[i].offsetTop;
}

//goes one section up and updates the header class.
function goUp() {
    currentSection--;
    classUpdate();
}
//goes one section down and updates the header class.
function goDown() {
    currentSection++;
    classUpdate();
}

function classUpdate() {
    //checks if it's on the first or last button. Disables
    if (currentSection <= 0){
        //Disables the left arrow if can't go Up anymore
        document.getElementsByClassName('navArrows')[0].classList.add("noArrow");
        document.getElementsByClassName('navArrows')[1].classList.remove("noArrow");
    } else  if(currentSection >= sections.length-1){
        //Disables the right arrow if can't go down anymore
        document.getElementsByClassName('navArrows')[1].classList.add("noArrow");
        document.getElementsByClassName('navArrows')[0].classList.remove("noArrow");
    } else {
        //Activates both of the arrows.
        document.getElementsByClassName('navArrows')[0].classList.remove("noArrow");
        document.getElementsByClassName('navArrows')[1].classList.remove("noArrow");
    }
    //While loop to remove the active class from ALL buttons.
    let i = 0;
    while (i < buttons.length){
        buttons[i].classList.remove('active');
        i++;
    }
    //adds the active class to the corresponding button
    buttons[currentSection].classList.add('active');

    //calls scroll method to go to the right page.
    goTo();
}


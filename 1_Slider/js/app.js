const prevBtn = document.getElementById('prevPicture');
const nextBtn = document.getElementById('nextPicture');
const listItems = document.querySelectorAll('.slider li');
const spanCounter = document.getElementById('imgCounter');

let counter = 0;
listItems[counter].classList.add('visible');

prevBtn.addEventListener('click', function(e) {
    listItems[counter].classList.remove('visible');
    counter--;
    if ( counter < 0 ) {
        counter = listItems.length - 1;
    }
    listItems[counter].classList.add('visible');

    showCounter();
});

nextBtn.addEventListener('click', function(e) {
    listItems[counter].classList.remove('visible');
    counter++;
    if ( counter >= listItems.length ) {
        counter = 0;
    }
    listItems[counter].classList.add('visible');

    showCounter();
});

function showCounter() {
    let imgCounter = counter;
    imgCounter++;
    spanCounter.innerText = imgCounter;
}
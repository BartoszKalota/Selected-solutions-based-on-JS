function init() {

    const prevBtn = document.getElementById('prevPicture');
    const nextBtn = document.getElementById('nextPicture');
    const listItems = document.querySelectorAll('.slider li');
    const spanCounter = document.getElementById('imgCounter');
    
    let counter = 0;
    listItems[counter].classList.add('visible');

    function showPrevImg(event) {
        listItems[counter].classList.remove('visible');
        counter--;
        if ( counter < 0 ) {
            counter = listItems.length - 1;
        }
        listItems[counter].classList.add('visible');

        showCounter();
    }
    prevBtn.addEventListener('click', showPrevImg);

    function showNextImg(event) {
        listItems[counter].classList.remove('visible');
        counter++;
        if ( counter >= listItems.length ) {
            counter = 0;
        }
        listItems[counter].classList.add('visible');

        showCounter();
    }
    nextBtn.addEventListener('click', showNextImg);

    function showCounter() {
        let imgCounter = counter;
        imgCounter++;
        spanCounter.innerText = imgCounter;
    }

}
document.addEventListener('DOMContentLoaded', init);
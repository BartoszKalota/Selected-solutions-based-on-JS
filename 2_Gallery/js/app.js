const listItems = document.querySelectorAll('.gallery li');
const body = document.querySelector('body');

listItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        /* Utworzenie zestawu tagów:
        <div class="fullScreen">
            <img src="...">
            <button class="close">Close</button>
        </div> */
        const divBig = document.createElement('div');
        divBig.classList.add('fullScreen');
        body.appendChild(divBig);

        const imgBig = document.createElement('img');
        const imgUrl = this.firstElementChild.getAttribute('src');
        imgBig.setAttribute('src', imgUrl);
        divBig.appendChild(imgBig);

        const buttonBig = document.createElement('button');
        buttonBig.classList.add('close');
        buttonBig.innerText = 'Close';
        divBig.appendChild(buttonBig);
        
        //Zdarzenie do przycisku zamykania
        buttonBig.addEventListener('click', function(e) {
            const divBig = this.parentElement;
            body.removeChild(divBig);
        });
    });
});
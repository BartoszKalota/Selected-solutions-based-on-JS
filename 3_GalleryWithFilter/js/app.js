const images = document.querySelectorAll('#gallery img');
const hideBtn = document.getElementById('hideButton');
const showBtn = document.getElementById('showButton');
const tagInput = document.getElementById('tagInput');

hideBtn.addEventListener('click', function(e) {
    for (let i = 0; i < images.length; i++) {
        const phrase = tagInput.value.toLowerCase();
        let imgDataTags = images[i].dataset.tag;
        if ( imgDataTags.includes(phrase) ) {
            images[i].classList.add('invisible');
        }
        else {
            images[i].classList.remove('invisible');
        }
    }
    tagInput.value = '';
});

showBtn.addEventListener('click', function(e) {
    for (let i = 0; i < images.length; i++) {
        const phrase = tagInput.value.toLowerCase();    
        let imgDataTags = images[i].dataset.tag;
        if ( imgDataTags.includes(phrase) ) {
            images[i].classList.remove('invisible');
        }
        else {
            images[i].classList.add('invisible');
        }
    }
    tagInput.value = '';
});
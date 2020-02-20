const level1Items = document.querySelectorAll('.nav > ul > li');
console.log(level1Items);

level1Items.forEach(function(level1Item) {
    level1Item.addEventListener('mouseover', function(e) {
        const level2Menu = this.querySelector('ul');
        if ( level2Menu !== null ) {
            level2Menu.style.display = 'block';
        }
    });
});
level1Items.forEach(function(level1Item) {
    level1Item.addEventListener('mouseout', function(e) {
        const level2Menu = this.querySelector('ul');
        if ( level2Menu !== null ) {
            level2Menu.style.display = 'none';
        }
    });
});
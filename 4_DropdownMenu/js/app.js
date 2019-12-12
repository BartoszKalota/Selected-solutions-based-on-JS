function init() {

    const level1Items = document.querySelectorAll('.nav > ul > li');
    console.log(level1Items);

    function showSubmenu(event) {
        const level2Menu = this.querySelector('ul');
        if ( level2Menu !== null ) {
            level2Menu.style.display = 'block';
        }
    }
    function hideSubmenu(event) {
        const level2Menu = this.querySelector('ul');
        if ( level2Menu !== null ) {
            level2Menu.style.display = 'none';
        }
    }
    level1Items.forEach(function(level1Item) {
        level1Item.addEventListener('mouseover', showSubmenu);
    });
    level1Items.forEach(function(level1Item) {
        level1Item.addEventListener('mouseout', hideSubmenu);
    });

}
document.addEventListener('DOMContentLoaded', init);
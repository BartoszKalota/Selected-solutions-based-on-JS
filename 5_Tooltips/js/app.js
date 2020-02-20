const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(function(tooltip) {
    tooltip.addEventListener('mouseover', function(e) {
        // Stworzenie elementu:
        // <span class="tooltipText">Text tooltipa</span>
        const tooltipText = document.createElement('span');
        tooltipText.classList.add('tooltipText');
        tooltipText.innerText = this.dataset.text;
        this.appendChild(tooltipText);
    });
    tooltip.addEventListener('mouseout', function(e) {
        const tooltipText = this.querySelector('span');
        this.removeChild(tooltipText);
    });
});